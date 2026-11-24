/*
3. Дана матрица размера M × N. Найти номер ее столбца с наименьшим произведением элементов и вывести данный номер, а также значение наименьшего произведения.
*/

import { matrix, number } from '../../lib/input.js';
export const title = 'Столбец с минимальным произведением';
export const example = [[[2, 3, 1], [4, -2, 5]]];

export default function solve(values) {
  matrix(values);
  let column = 1;
  let minimum = Infinity;
  for (let col = 0; col < values[0].length; col++) {
    let product = 1;
    for (let row = 0; row < values.length; row++) product *= values[row][col];
    number(product, 'Произведение столбца');
    if (product < minimum) { minimum = product; column = col + 1; }
  }
  return { column, product: minimum };
}
