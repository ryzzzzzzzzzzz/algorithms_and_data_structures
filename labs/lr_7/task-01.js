/*
Используя словесное и визуальное  описание реализовать сортировку пузырьком.
*/

import { numbers } from '../../lib/input.js';
export const title = 'Сортировка пузырьком';
export const example = [[5, 2, 9, 1, 5]];

export default function solve(values) {
  numbers(values);
  const result = [...values];
  for (let end = result.length - 1; end > 0; end--) {
    let swapped = false;
    for (let i = 0; i < end; i++) {
      if (result[i] > result[i + 1]) {
        [result[i], result[i + 1]] = [result[i + 1], result[i]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return result;
}
