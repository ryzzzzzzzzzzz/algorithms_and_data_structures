/*
5. Дано целое число. Вывести его строку-описание вида «отрицательное четное число», «нулевое число», «положительное нечетное число» и т. д.
*/

import { integer } from '../../lib/input.js';
export const title = 'Описание знака и чётности числа';
export const example = [-12];

export default function solve(n) {
  integer(n, 'n');
  if (n === 0) return 'нулевое число';
  const sign = n > 0 ? 'положительное' : 'отрицательное';
  const parity = n % 2 === 0 ? 'четное' : 'нечетное';
  return `${sign} ${parity} число`;
}
