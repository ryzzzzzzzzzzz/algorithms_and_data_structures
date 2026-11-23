/*
Даны координаты двух противоположных вершин прямоугольника: (x1, y1), (x2, y2). Стороны прямоугольника параллельны осям координат. Найти периметр и площадь данного прямоугольника.
*/

import { point, requireCondition } from '../../lib/input.js';
export const title = 'Прямоугольник по противоположным вершинам';
export const example = [[1, 2], [5, 7]];

export default function solve(first, second) {
  point(first);
  point(second);
  const width = Math.abs(second[0] - first[0]);
  const height = Math.abs(second[1] - first[1]);
  requireCondition(width > 0 && height > 0, 'Прямоугольник должен иметь ненулевые стороны.');
  return { perimeter: 2 * (width + height), area: width * height };
}
