/*
3. Дано целое число N (> 0). Найти квадрат данного числа, используя для его вычисления следующую формулу: N2 = 1 + 3 + 5 + . . . + (2·N − 1). После добавления к сумме каждого слагаемого выводить текущее значение суммы
*/

import { integer } from '../../lib/input.js';
export const title = 'Квадрат числа через сумму нечётных чисел';
export const example = [5];

export default function solve(n) {
  integer(n, 'N', 1, 100000);
  let sum = 0;
  const partialSums = [];
  for (let i = 1; i <= n; i++) {
    sum += 2 * i - 1;
    partialSums.push(sum);
  }
  return { square: sum, partialSums };
}
