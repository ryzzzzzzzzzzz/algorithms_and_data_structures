/*
Даны три точки A, B, C на числовой оси. Найти длины отрезков AC и BC и их сумму.
*/

import { number } from '../../lib/input.js';
export const title = 'Длины AC, BC и их сумма';
export const example = [1, 8, 4];

export default function solve(a, b, c) {
  number(a, 'A');
  number(b, 'B');
  number(c, 'C');
  const ac = Math.abs(c - a);
  const bc = Math.abs(c - b);
  return { ac, bc, sum: ac + bc };
}
