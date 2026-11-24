/*
2. Дана матрица размера M × N и целое число K (1 ≤ K ≤ M). Найти сумму и произведение элементов K-й строки данной матрицы.
*/

import { matrix, integer } from '../../lib/input.js';
export const title = 'Сумма и произведение K-й строки';
export const example = [[[1, 2, 3], [4, 5, 6]], 2];

export default function solve(values, k) {
  matrix(values);
  integer(k, 'K', 1, values.length);
  let sum = 0;
  let product = 1;
  for (const value of values[k - 1]) { sum += value; product *= value; }
  return { sum, product };
}
