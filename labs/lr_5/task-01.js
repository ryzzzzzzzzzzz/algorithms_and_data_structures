/*
1. Дано целое число N (> 0). Сформировать и вывести целочисленный массив размера N, содержащий N первых положительных нечетных чисел: 1, 3, 5, . . . .
*/

import { integer } from '../../lib/input.js';
export const title = 'Первые N положительных нечётных чисел';
export const example = [5];

export default function solve(n) {
  integer(n, 'N', 1, 100000);
  const result = [];
  for (let i = 0; i < n; i++) result.push(2 * i + 1);
  return result;
}
