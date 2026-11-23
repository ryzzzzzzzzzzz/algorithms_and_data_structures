/*
Даны два числа a и b. Найти их среднее арифметическое: (a + b)/2.
*/

import { number } from '../../lib/input.js';
export const title = 'Среднее арифметическое';
export const example = [7, 11];

export default function solve(a, b) {
  number(a, 'a');
  number(b, 'b');
  return a / 2 + b / 2;
}
