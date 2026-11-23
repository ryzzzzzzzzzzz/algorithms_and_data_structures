/*
9. Дан массив размера N. Найти номер его последнего локального максимума (локальный максимум — это элемент, который больше любого из своих соседей).
*/

import { numbers } from '../../lib/input.js';
export const title = 'Номер последнего локального максимума';
export const example = [[1, 5, 2, 7, 3]];

export default function solve(values) {
  numbers(values);
  for (let i = values.length - 1; i >= 0; i--) {
    const greaterThanLeft = i === 0 || values[i] > values[i - 1];
    const greaterThanRight = i === values.length - 1 || values[i] > values[i + 1];
    if (greaterThanLeft && greaterThanRight) return i + 1;
  }
  return 0;
}
