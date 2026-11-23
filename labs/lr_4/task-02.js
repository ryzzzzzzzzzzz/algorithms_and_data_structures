/*
2. Числа Фибоначчи: Напишите функцию, которая рекурсивно вычисляет n-ое число Фибоначчи.
*/

import { bigInteger, requireCondition } from '../../lib/input.js';
export const title = 'Рекурсивное число Фибоначчи';
export const example = [20];

export default function solve(value) {
  const n = bigInteger(value);
  requireCondition(n >= 0n && n <= 1000n, 'Для Фибоначчи требуется 0 ≤ n ≤ 1000.');
  const memo = new Map([[0n, 0n], [1n, 1n]]);
  function fibonacci(k) {
    if (memo.has(k)) return memo.get(k);
    const result = fibonacci(k - 1n) + fibonacci(k - 2n);
    memo.set(k, result);
    return result;
  }
  return fibonacci(n);
}
