/*
Даны стороны прямоугольника a и b. Найти его площадь S = a·b и периметр P = 2·(a + b).
*/

import { positive } from '../../lib/input.js';
export const title = 'Площадь и периметр прямоугольника';
export const example = [3, 4];

export default function solve(a, b) {
  positive(a, 'a');
  positive(b, 'b');
  return { area: a * b, perimeter: 2 * (a + b) };
}
