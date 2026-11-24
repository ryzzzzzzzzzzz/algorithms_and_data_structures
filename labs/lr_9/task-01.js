/*
Используя словесное и визуальное  описание реализовать сортировку выбором.
*/

import { numbers } from '../../lib/input.js';
export const title = 'Сортировка выбором';
export const example = [[5, 2, 9, 1, 5]];

export default function solve(values) {
  numbers(values);
  const result = [...values];
  for (let i = 0; i < result.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[min]) min = j;
    }
    if (min !== i) [result[i], result[min]] = [result[min], result[i]];
  }
  return result;
}
