/*
5. Дана целочисленная матрица размера M × N. Найти номер первого из ее столбцов, содержащих только нечетные числа. Если таких столбцов нет, то вывести 0.
*/

import { matrix, integer } from '../../lib/input.js';
export const title = 'Первый столбец только из нечётных чисел';
export const example = [[[2, 3, 5], [4, -7, 8]]];

export default function solve(values) {
  matrix(values);
  for (const row of values) for (const value of row) integer(value, 'Элемент матрицы');
  for (let col = 0; col < values[0].length; col++) {
    let allOdd = true;
    for (let row = 0; row < values.length; row++) {
      if (values[row][col] % 2 === 0) { allOdd = false; break; }
    }
    if (allOdd) return col + 1;
  }
  return 0;
}
