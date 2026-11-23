/*
Найти значение функции y = 3x6 − 6x2 − 7 при данном значении x
*/

import { number } from '../../lib/input.js';
export const title = 'Значение 3x⁶ − 6x² − 7';
export const example = [2];

export default function solve(x) {
  number(x, 'x');
  return 3 * x ** 6 - 6 * x ** 2 - 7;
}
