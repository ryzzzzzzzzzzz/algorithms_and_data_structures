/*
Даны три точки A, B, C на числовой оси. Точка C расположена между точками A и B. Найти произведение длин отрезков AC и BC
*/

import { number, requireCondition } from '../../lib/input.js';
export const title = 'Произведение длин AC и BC';
export const example = [1, 8, 4];

export default function solve(a, b, c) {
  number(a, 'A');
  number(b, 'B');
  number(c, 'C');
  requireCondition(c > Math.min(a, b) && c < Math.max(a, b), 'C должна лежать строго между A и B.');
  return Math.abs(c - a) * Math.abs(c - b);
}
