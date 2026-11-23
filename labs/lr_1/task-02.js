/*
Дан диаметр окружности d. Найти ее длину L = π·d. В качестве значения π использовать 3.14.
*/

import { positive } from '../../lib/input.js';
export const title = 'Длина окружности';
export const example = [10];

export default function solve(d) {
  positive(d, 'Диаметр');
  return 3.14 * d;
}
