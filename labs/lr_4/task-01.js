/*
1. Факториал числа: Напишите функцию, которая рекурсивно вычисляет факториал заданного числа n.
*/

import { bigInteger, requireCondition } from '../../lib/input.js';
export const title = 'Рекурсивный факториал';
export const example = [10];

export default function solve(value) {
  const n = bigInteger(value);
  requireCondition(n >= 0n && n <= 500n, 'Для рекурсивного факториала требуется 0 ≤ n ≤ 500.');
  function factorial(k) {
    if (k === 0n) return 1n;
    return k * factorial(k - 1n);
  }
  return factorial(n);
}
