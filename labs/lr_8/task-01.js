/*
Используя словесное и визуальное  описание реализовать сортировку вставками.
*/

import { numbers } from '../../lib/input.js';
export const title = 'Сортировка вставками';
export const example = [[5, 2, 9, 1, 5]];

export default function solve(values) {
  numbers(values);
  const result = [...values];
  for (let i = 1; i < result.length; i++) {
    const current = result[i];
    let position = i - 1;
    while (position >= 0 && result[position] > current) {
      result[position + 1] = result[position];
      position--;
    }
    result[position + 1] = current;
  }
  return result;
}
