/*
3. Даны целые числа N (> 2), A и B. Сформировать и вывести целочисленный массив размера N, первый элемент которого равен A, второй равен B, а каждый последующий элемент равен сумме всех предыдущих
*/

import { integer } from '../../lib/input.js';
export const title = 'Каждый новый элемент — сумма предыдущих';
export const example = [6, 1, 2];

export default function solve(n, a, b) {
  integer(n, 'N', 3, 100000);
  integer(a, 'A');
  integer(b, 'B');
  const result = [a, b];
  let sum = a + b;
  for (let i = 2; i < n; i++) {
    result.push(integer(sum, 'Полученный элемент'));
    sum += result[i];
  }
  return result;
}
