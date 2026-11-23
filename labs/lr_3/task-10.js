/*
10. Даны целые положительные числа A и B. Найти их наибольший общий делитель (НОД), используя алгоритм Евклида
*/

import { integer } from '../../lib/input.js';
export const title = 'НОД по алгоритму Евклида';
export const example = [48, 18];

export default function solve(a, b) {
  integer(a, 'A', 1);
  integer(b, 'B', 1);
  while (b !== 0) [a, b] = [b, a % b];
  return a;
}
