/*
1. Дана квадратная матрица A порядка M (M — нечетное число). Начиная с элемента A1,1 и перемещаясь против часовой стрелки, вывести все ее элементы по спирали: первый столбец, последняя строка, последний столбец в обратном порядке, первая строка в обратном порядке, оставшиеся элементы второго столбца и т. д.; последним выводится центральный элемент матрицы.
*/

import { matrix, requireCondition } from '../../lib/input.js';
export const title = 'Спираль против часовой стрелки';
export const example = [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]];

export default function solve(values) {
  matrix(values);
  requireCondition(values.length === values[0].length && values.length % 2 === 1,
    'Нужна квадратная матрица нечётного порядка.');
  let top = 0;
  let bottom = values.length - 1;
  let left = 0;
  let right = values.length - 1;
  const result = [];
  while (top <= bottom && left <= right) {
    for (let row = top; row <= bottom; row++) result.push(values[row][left]);
    left++;
    for (let col = left; col <= right; col++) result.push(values[bottom][col]);
    bottom--;
    if (left <= right) {
      for (let row = bottom; row >= top; row--) result.push(values[row][right]);
      right--;
    }
    if (top <= bottom) {
      for (let col = right; col >= left; col--) result.push(values[top][col]);
      top++;
    }
  }
  return result;
}
