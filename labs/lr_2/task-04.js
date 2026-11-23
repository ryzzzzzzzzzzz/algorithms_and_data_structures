/*
4. Даны координаты точки, не лежащей на координатных осях OX и OY. Определить номер координатной четверти, в которой находится данная точка
*/

import { nonzero } from '../../lib/input.js';
export const title = 'Координатная четверть';
export const example = [-3, 4];

export default function solve(x, y) {
  nonzero(x, 'x');
  nonzero(y, 'y');
  if (x > 0) return y > 0 ? 1 : 4;
  return y > 0 ? 2 : 3;
}
