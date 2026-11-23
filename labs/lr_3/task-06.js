/*
6. Даны целые положительные числа A и B (A < B). Вывести все целые числа от A до B включительно; при этом каждое число должно выводиться столько раз, каково его значение (например, число 3 выводится 3 раза).
*/

import { integer, requireCondition } from '../../lib/input.js';
export const title = 'Числа от A до B с повторениями';
export const example = [2, 4];

export default function solve(a, b) {
  integer(a, 'A', 1, 10000);
  integer(b, 'B', 1, 10000);
  requireCondition(a < b, 'Должно выполняться A < B.');
  requireCondition((a + b) * (b - a + 1) / 2 <= 100000, 'Результат не должен превышать 100000 элементов.');
  const result = [];
  for (let value = a; value <= b; value++) {
    for (let repeat = 0; repeat < value; repeat++) result.push(value);
  }
  return result;
}
