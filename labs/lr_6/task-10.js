/*
10. Дана квадратная матрица A порядка M. Найти сумму элементов каждой ее диагонали, параллельной главной (начиная с одноэлементной диагонали).
*/

import { matrix, requireCondition } from '../../lib/input.js';
export const title = 'Суммы диагоналей, параллельных главной';
export const example = [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]];

export default function solve(values) {
  matrix(values);
  const n = values.length;
  requireCondition(values[0].length === n, 'Матрица должна быть квадратной.');
  const sums = [];
  // Начало — одноэлементная диагональ в правом верхнем углу.
  for (let offset = n - 1; offset >= -(n - 1); offset--) {
    let sum = 0;
    let row = Math.max(0, -offset);
    let col = Math.max(0, offset);
    while (row < n && col < n) sum += values[row++][col++];
    sums.push(sum);
  }
  return sums;
}
