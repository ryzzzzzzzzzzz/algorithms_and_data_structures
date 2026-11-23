// Общая обработка входных данных, без ввода/вывода внутри алгоритмов.
export function requireCondition(condition, message) {
  if (!condition) throw new RangeError(message);
}

export function number(value, name = 'Число') {
  requireCondition(typeof value === 'number' && Number.isFinite(value), `${name}: требуется конечное число.`);
  return value;
}

export function integer(value, name = 'Число', min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  requireCondition(Number.isSafeInteger(value) && value >= min && value <= max,
    `${name}: требуется целое число от ${min} до ${max}.`);
  return value;
}

export function positive(value, name = 'Число') {
  number(value, name);
  requireCondition(value > 0, `${name} должно быть положительным.`);
  return value;
}

export function nonzero(value, name = 'Число') {
  number(value, name);
  requireCondition(value !== 0, `${name} не должно быть нулём.`);
  return value;
}

export function numbers(values, minLength = 0) {
  requireCondition(Array.isArray(values) && values.length >= minLength,
    `Ожидается массив чисел длиной не менее ${minLength}.`);
  for (const value of values) number(value, 'Элемент массива');
  return values;
}

export function integers(values, minLength = 0) {
  numbers(values, minLength);
  for (const value of values) integer(value, 'Элемент массива');
  return values;
}

export function sortedNumbers(values) {
  numbers(values);
  for (let i = 1; i < values.length; i++) {
    requireCondition(values[i - 1] <= values[i], 'Массив должен быть отсортирован по возрастанию.');
  }
  return values;
}

export function point(value) {
  numbers(value, 2);
  requireCondition(value.length === 2, 'Точка задаётся массивом [x, y].');
  return value;
}

export function matrix(value) {
  requireCondition(Array.isArray(value) && value.length > 0, 'Матрица должна содержать строки.');
  numbers(value[0], 1);
  const width = value[0].length;
  for (const row of value) {
    numbers(row, width);
    requireCondition(row.length === width, 'Строки матрицы должны иметь одинаковую длину.');
  }
  return value;
}

export function text(value) {
  requireCondition(typeof value === 'string', 'Ожидается строка.');
  return value;
}

export function bigInteger(value) {
  if (typeof value === 'bigint') return value;
  if (typeof value === 'number') return BigInt(integer(value));
  requireCondition(typeof value === 'string' && /^[+-]?\d+$/.test(value),
    'Ожидается целое число либо строка с целым числом.');
  requireCondition(value.replace(/^[+-]/, '').length <= 1000, 'Допускается не более 1000 цифр.');
  return BigInt(value);
}
