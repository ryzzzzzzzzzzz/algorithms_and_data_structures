/*
8. Подсчет количества цифр в числе: Напишите функцию, которая рекурсивно подсчитывает количество цифр в заданном числе.
*/

import { bigInteger } from '../../lib/input.js';
export const title = 'Рекурсивный подсчёт цифр';
export const example = ['-12345678901234567890'];

export default function solve(value) {
  const n = bigInteger(value);
  function count(k) {
    if (k < 10n) return 1;
    return 1 + count(k / 10n);
  }
  return count(n < 0n ? -n : n);
}
