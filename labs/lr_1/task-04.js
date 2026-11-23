/*
Даны два ненулевых числа. Найти сумму, разность, произведение и частное их квадратов.
*/

import { nonzero } from '../../lib/input.js';
export const title = 'Операции с квадратами двух чисел';
export const example = [3, 2];

export default function solve(a, b) {
  nonzero(a, 'a');
  nonzero(b, 'b');
  const first = a ** 2;
  const second = b ** 2;
  return { sum: first + second, difference: first - second, product: first * second, quotient: first / second };
}
