/*
3. На плоскости расположены три точки: A, B, C. Определить, какая из двух последних точек (B или C) расположена ближе к A, и вывести эту точку и ее расстояние от точки A.
*/

import { point } from '../../lib/input.js';
export const title = 'Ближайшая к A точка';
export const example = [[0, 0], [3, 4], [1, 1]];

export default function solve(a, b, c) {
  point(a);
  point(b);
  point(c);
  const ab = Math.hypot(b[0] - a[0], b[1] - a[1]);
  const ac = Math.hypot(c[0] - a[0], c[1] - a[1]);
  // При равенстве расстояний выбирается B.
  if (ab <= ac) return { name: 'B', point: [...b], distance: ab };
  return { name: 'C', point: [...c], distance: ac };
}
