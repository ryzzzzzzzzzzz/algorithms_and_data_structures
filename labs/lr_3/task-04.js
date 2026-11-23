/*
4. Дано вещественное число A и целое число N (> 0). Используя один цикл, найти сумму 1 + A + A2 + A3 + . . . + AN
*/

import { number, integer } from '../../lib/input.js';
export const title = 'Сумма степеней 1 + A + … + Aᴺ';
export const example = [2, 4];

export default function solve(a, n) {
  number(a, 'A');
  integer(n, 'N', 1, 100000);
  let sum = 1;
  let power = 1;
  for (let i = 1; i <= n; i++) {
    power *= a;
    sum += power;
  }
  return number(sum, 'Сумма');
}
