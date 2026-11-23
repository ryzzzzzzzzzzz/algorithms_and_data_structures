/*
2. Дано целое число N (> 1), а также первый член A и знаменатель D геометрической прогрессии. Сформировать и вывести массив размера N, содержащий N первых членов данной прогрессии: A, A·D, A·D2 , A·D3 , . . .
*/

import { integer, number } from '../../lib/input.js';
export const title = 'Геометрическая прогрессия';
export const example = [5, 2, 3];

export default function solve(n, a, d) {
  integer(n, 'N', 2, 100000);
  number(a, 'A');
  number(d, 'D');
  const result = [];
  let term = a;
  for (let i = 0; i < n; i++) {
    result.push(number(term, 'Член прогрессии'));
    term *= d;
  }
  return result;
}
