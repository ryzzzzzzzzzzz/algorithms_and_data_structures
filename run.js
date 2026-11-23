import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { labs, taskUrl } from './labs/catalog.js';

const help = `Запуск заданий на JavaScript (Node.js 22+)

node run.js --list                      Список лабораторных
node run.js 1 --list                    Список заданий лабораторной
node run.js 1 1                         Запуск встроенного примера
node run.js 1 1 '[3,4]'                 Собственные позиционные аргументы в JSON
node run.js 1 1 --file input.json       Аргументы из UTF-8 файла с JSON-массивом

Массив входных аргументов обязателен: для функции с одним массивом — [[1,2,3]].
Большие целые можно передавать строками в заданиях 4.1, 4.2 и 4.8.
Результат выводится как JSON. Значения BigInt выводятся десятичными строками.`;

function id(value) {
  if (!/^[1-9]\d*$/.test(value ?? '') || !Number.isSafeInteger(Number(value))) {
    throw new Error('Номер должен быть положительным целым числом.');
  }
  return Number(value);
}

export async function main(args = process.argv.slice(2)) {
  if (args.length === 1 && ['--help', '-h'].includes(args[0])) {
    console.log(help);
    return;
  }
  if (args.length === 0 || (args.length === 1 && args[0] === '--list')) {
    for (const lab of labs) console.log(`${lab.id}. ${lab.title} — заданий: ${lab.count}`);
    return;
  }
  const lab = labs.find((item) => item.id === id(args[0]));
  if (!lab) throw new Error('Лабораторная не найдена. Доступны номера 1–12.');
  if (args.length === 1 || (args.length === 2 && args[1] === '--list')) {
    for (let task = 1; task <= lab.count; task++) {
      const { title, example } = await import(taskUrl(lab.id, task));
      console.log(`${lab.id}.${task}. ${title}\n  Аргументы примера: ${JSON.stringify(example)}`);
    }
    return;
  }
  const task = id(args[1]);
  if (task > lab.count) throw new Error(`В работе ${lab.id} доступны задания 1–${lab.count}.`);
  const module = await import(taskUrl(lab.id, task));
  let input;
  if (args.length === 2) input = structuredClone(module.example);
  else {
    let raw;
    if (args.length === 4 && args[2] === '--file') raw = await readFile(args[3], 'utf8');
    else if (args.length === 3 && args[2] !== '--file') raw = args[2];
    else throw new Error(`Неверные параметры запуска.\n${help}`);
    try { input = JSON.parse(raw.replace(/^\uFEFF/, '')); }
    catch { throw new Error('Не удалось прочитать JSON. Вход должен быть массивом аргументов функции.'); }
  }
  if (!Array.isArray(input)) throw new Error('Ожидается JSON-массив аргументов.');
  const result = await module.default(...input);
  const output = JSON.stringify(result, (_, value) => {
    if (typeof value === 'bigint') return value.toString();
    if (typeof value === 'number' && !Number.isFinite(value)) {
      throw new Error('Результат выходит за диапазон Number. Уменьшите входные значения.');
    }
    return value;
  }, 2);
  console.log(output);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(`Ошибка: ${error.message}`);
    process.exitCode = 1;
  });
}
