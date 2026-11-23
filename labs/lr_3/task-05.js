/*
5. Дано вещественное число A и целое число N (> 0). Используя один цикл, найти значение выражения 
1 − A + A2 − A3 + . . . ± AN . 
Условный оператор не использовать.
*/

import { number, integer } from '../../lib/input.js';
export const title = 'Знакопеременная сумма степеней';
export const example = [2, 4];

export default function solve(a, n) {
  number(a, 'A');
  integer(n, 'N', 1, 100000);
  let sum = 1;
  let term = 1;
  // Один цикл; знак меняется без условного оператора.
  for (let i = 1; i <= n; i++) {
    term *= -a;
    sum += term;
  }
  return number(sum, 'Сумма');
}
