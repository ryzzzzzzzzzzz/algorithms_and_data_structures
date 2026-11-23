/*
8. Дан массив A размера N. Найти минимальный элемент из его элементов с четными номерами: A2, A4, A6,
*/

import { numbers } from '../../lib/input.js';
export const title = 'Минимум среди элементов с чётными номерами';
export const example = [[8, 7, 6, 2, 9, 4]];

export default function solve(values) {
  numbers(values, 2);
  let minimum = values[1];
  for (let i = 3; i < values.length; i += 2) {
    if (values[i] < minimum) minimum = values[i];
  }
  return minimum;
}
