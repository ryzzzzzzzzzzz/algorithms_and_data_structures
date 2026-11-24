/*
7. Дана матрица размера M × N. Поменять местами столбцы, содержащие минимальный и максимальный элементы матрицы.
*/

import { matrix } from '../../lib/input.js';
export const title = 'Обмен столбцов глобального минимума и максимума';
export const example = [[[3, 1, 5], [9, 4, 7]]];

export default function solve(values) {
  matrix(values);
  let minimum = values[0][0];
  let maximum = minimum;
  let minColumn = 0;
  let maxColumn = 0;
  for (const row of values) {
    for (let col = 0; col < row.length; col++) {
      if (row[col] < minimum) { minimum = row[col]; minColumn = col; }
      if (row[col] > maximum) { maximum = row[col]; maxColumn = col; }
    }
  }
  return values.map((row) => {
    const result = [...row];
    [result[minColumn], result[maxColumn]] = [result[maxColumn], result[minColumn]];
    return result;
  });
}
