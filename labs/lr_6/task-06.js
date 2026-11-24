/*
6. Дана матрица размера M × N. Преобразовать матрицу, поменяв местами минимальный и максимальный элемент в каждой строке.
*/

import { matrix } from '../../lib/input.js';
export const title = 'Обмен минимума и максимума каждой строки';
export const example = [[[3, 1, 5], [9, 4, 7]]];

export default function solve(values) {
  matrix(values);
  return values.map((row) => {
    const result = [...row];
    let min = 0;
    let max = 0;
    for (let col = 1; col < row.length; col++) {
      if (row[col] < row[min]) min = col;
      if (row[col] > row[max]) max = col;
    }
    [result[min], result[max]] = [result[max], result[min]];
    return result;
  });
}
