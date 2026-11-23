/*
9. Начальный вклад в банке равен 1000 руб. Через каждый месяц размер вклада увеличивается на P процентов от имеющейся суммы (P — вещественное число, 0 < P < 25). По данному P определить, через сколько месяцев размер вклада превысит 1100 руб., и вывести найденное количество месяцев K (целое число) и итоговый размер вклада S (вещественное число).
*/

import { number, requireCondition } from '../../lib/input.js';
export const title = 'Рост вклада до суммы больше 1100';
export const example = [5];

export default function solve(p) {
  number(p, 'P');
  requireCondition(p > 0 && p < 25, 'Требуется 0 < P < 25.');
  let months = 0;
  let balance = 1000;
  while (balance <= 1100) {
    requireCondition(months < 1000000, 'Расчёт ограничен 1000000 месяцев. Увеличьте P.');
    const next = balance + balance * p / 100;
    requireCondition(next > balance, 'Процент слишком мал для точности Number.');
    balance = next;
    months++;
  }
  return { months, balance };
}
