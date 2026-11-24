/*
Используя словесное описание реализовать бинарный поиск.
*/

import { sortedNumbers, number } from '../../lib/input.js';
export const title = 'Итеративный бинарный поиск';
export const example = [[1, 3, 5, 7, 9], 7];

export default function solve(values, target) {
  sortedNumbers(values);
  number(target, 'Искомое значение');
  let left = 0;
  let right = values.length - 1;
  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    if (values[middle] === target) return middle;
    if (values[middle] > target) right = middle - 1;
    else left = middle + 1;
  }
  return -1;
}
