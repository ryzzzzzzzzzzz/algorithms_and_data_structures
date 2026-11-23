/*
2. Даны три числа. Найти сумму двух наибольших из них
*/

import { number } from '../../lib/input.js';
export const title = 'Сумма двух наибольших чисел';
export const example = [7, 2, 5];

export default function solve(a, b, c) {
  number(a, 'a');
  number(b, 'b');
  number(c, 'c');
  if (a <= b && a <= c) return b + c;
  if (b <= a && b <= c) return a + c;
  return a + b;
}
