/*
3. Возведение в степень: Напишите функцию, которая рекурсивно возводит число x в степень n.
*/

import { number, integer, requireCondition } from '../../lib/input.js';
export const title = 'Рекурсивное возведение в степень';
export const example = [2, -3];

export default function solve(x, n) {
  number(x, 'x');
  integer(n, 'n');
  requireCondition(x !== 0 || n >= 0, 'Ноль нельзя возводить в отрицательную степень.');
  function power(base, exponent) {
    if (exponent === 0) return 1;
    const half = power(base, Math.floor(exponent / 2));
    return exponent % 2 === 0 ? half * half : half * half * base;
  }
  // Отрицательная степень вычисляется для обратного основания.
  return number(power(n < 0 ? 1 / x : x, Math.abs(n)), 'Степень');
}
