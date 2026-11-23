/*
Найти расстояние между двумя точками с заданными координатами (x1, y1) и (x2, y2)
*/

import { point } from '../../lib/input.js';
export const title = 'Расстояние между точками';
export const example = [[0, 0], [3, 4]];

export default function solve(first, second) {
  point(first);
  point(second);
  return Math.hypot(second[0] - first[0], second[1] - first[1]);
}
