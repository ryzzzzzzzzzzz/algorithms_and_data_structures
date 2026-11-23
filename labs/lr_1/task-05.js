/*
Даны два ненулевых числа. Найти сумму, разность, произведение и частное их модулей.
*/

import { nonzero } from '../../lib/input.js';
export const title = 'Операции с модулями двух чисел';
export const example = [-6, 2];

export default function solve(a, b) {
  nonzero(a, 'a');
  nonzero(b, 'b');
  const first = Math.abs(a);
  const second = Math.abs(b);
  return { sum: first + second, difference: first - second, product: first * second, quotient: first / second };
}
