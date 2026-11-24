/*
4. Дана матрица размера M × N. В каждом ее столбце найти количество элементов, больших среднего арифметического всех элементов этого столбца
*/

import { matrix } from '../../lib/input.js';
export const title = 'Количество элементов выше среднего в столбцах';
export const example = [[[1, 6], [3, 2], [8, 4]]];

export default function solve(values) {
  matrix(values);
  const counts = [];
  for (let col = 0; col < values[0].length; col++) {
    let sum = 0;
    for (let row = 0; row < values.length; row++) sum += values[row][col];
    const mean = sum / values.length;
    let count = 0;
    for (let row = 0; row < values.length; row++) {
      if (values[row][col] > mean) count++;
    }
    counts.push(count);
  }
  return counts;
}
