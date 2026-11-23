/*
6. Дан массив размера N и целые числа K и L (1 ≤ K ≤ L ≤ N). Найти среднее арифметическое элементов массива с номерами от K до L включительно.
*/

import { numbers, integer, requireCondition } from '../../lib/input.js';
export const title = 'Среднее элементов с номерами K…L';
export const example = [[2, 4, 6, 8], 2, 4];

export default function solve(values, k, l) {
  numbers(values, 1);
  integer(k, 'K', 1, values.length);
  integer(l, 'L', 1, values.length);
  requireCondition(k <= l, 'Должно выполняться K ≤ L.');
  let sum = 0;
  for (let i = k - 1; i <= l - 1; i++) sum += values[i];
  return sum / (l - k + 1);
}
