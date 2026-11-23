/*
Найти значение функции y = 4(x−3)6 − 7(x−3)3 + 2 при данном значении x
*/

import { number } from '../../lib/input.js';
export const title = 'Значение 4(x − 3)⁶ − 7(x − 3)³ + 2';
export const example = [4];

export default function solve(x) {
  number(x, 'x');
  const cube = (x - 3) ** 3;
  return 4 * cube ** 2 - 7 * cube + 2;
}
