/*
8. Дана матрица размера M × N (M и N — четные числа). Поменять местами левую верхнюю и правую нижнюю четверти матрицы
*/

import { matrix, requireCondition } from '../../lib/input.js';
export const title = 'Обмен левой верхней и правой нижней четвертей';
export const example = [[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]];

export default function solve(values) {
  matrix(values);
  const rows = values.length;
  const cols = values[0].length;
  requireCondition(rows % 2 === 0 && cols % 2 === 0, 'Обе размерности должны быть чётными.');
  const result = values.map((row) => [...row]);
  for (let row = 0; row < rows / 2; row++) {
    for (let col = 0; col < cols / 2; col++) {
      const otherRow = row + rows / 2;
      const otherCol = col + cols / 2;
      [result[row][col], result[otherRow][otherCol]] = [result[otherRow][otherCol], result[row][col]];
    }
  }
  return result;
}
