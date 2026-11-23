/*
Даны координаты трех вершин треугольника: (x1, y1), (x2, y2), (x3, y3). Найти его периметр и площадь 
*/

import { point, requireCondition } from '../../lib/input.js';
export const title = 'Периметр и площадь треугольника';
export const example = [[0, 0], [3, 0], [0, 4]];

export default function solve(a, b, c) {
  point(a);
  point(b);
  point(c);
  const ab = Math.hypot(b[0] - a[0], b[1] - a[1]);
  const bc = Math.hypot(c[0] - b[0], c[1] - b[1]);
  const ca = Math.hypot(a[0] - c[0], a[1] - c[1]);
  // Векторное произведение даёт удвоенную площадь.
  const area = Math.abs((b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])) / 2;
  requireCondition(area > 0, 'Три точки должны образовывать невырожденный треугольник.');
  return { perimeter: ab + bc + ca, area };
}
