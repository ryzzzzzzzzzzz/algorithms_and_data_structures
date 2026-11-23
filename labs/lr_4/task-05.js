/*
5. Бинарный поиск: Напишите функцию, которая рекурсивно выполняет бинарный поиск заданного элемента в отсортированном массиве.
*/

import { sortedNumbers, number } from '../../lib/input.js';
export const title = 'Рекурсивный бинарный поиск';
export const example = [[1, 3, 5, 7, 9], 7];

export default function solve(values, target) {
  sortedNumbers(values);
  number(target, 'Искомое значение');
  function search(left, right) {
    if (left > right) return -1;
    const middle = left + Math.floor((right - left) / 2);
    if (values[middle] === target) return middle;
    if (values[middle] > target) return search(left, middle - 1);
    return search(middle + 1, right);
  }
  return search(0, values.length - 1);
}
