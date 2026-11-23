/*
2. Дано целое число N (> 0). Найти произведение 1.1 · 1.2 · 1.3 · . . . (N сомножителей).
*/

import { integer, number } from '../../lib/input.js';
export const title = 'Произведение 1,1 · 1,2 · …';
export const example = [3];

export default function solve(n) {
  integer(n, 'N', 1, 10000);
  let product = 1;
  for (let i = 1; i <= n; i++) product *= 1 + i / 10;
  return number(product, 'Произведение');
}
