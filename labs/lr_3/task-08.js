/*
8. Дано целое число N (> 1). Вывести наименьшее из целых чисел K, для которых сумма 1 + 2 + . . . + K будет больше или равна N, и саму эту сумму.
*/

import { integer } from '../../lib/input.js';
export const title = 'Минимальное K с суммой 1 + … + K ≥ N';
export const example = [10];

export default function solve(n) {
  integer(n, 'N', 2, 1000000000);
  let k = 0;
  let sum = 0;
  while (sum < n) sum += ++k;
  return { k, sum };
}
