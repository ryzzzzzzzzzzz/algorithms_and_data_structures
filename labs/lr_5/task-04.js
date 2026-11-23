/*
4. Дан массив A размера N. Вывести его элементы в следующем порядке: A1, AN , A2, AN−1, A3, AN−2,
*/

import { numbers } from '../../lib/input.js';
export const title = 'Массив попеременно с начала и с конца';
export const example = [[1, 2, 3, 4, 5]];

export default function solve(values) {
  numbers(values);
  const result = [];
  let left = 0;
  let right = values.length - 1;
  while (left <= right) {
    result.push(values[left++]);
    if (left <= right) result.push(values[right--]);
  }
  return result;
}
