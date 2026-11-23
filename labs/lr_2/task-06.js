/*
6. Дано целое число, лежащее в диапазоне 1–999. Вывести его строку описание вида «четное двузначное число», «нечетное трехзначное число» и т. д.
*/

import { integer } from '../../lib/input.js';
export const title = 'Описание чётности и разрядности числа';
export const example = [135];

export default function solve(n) {
  integer(n, 'n', 1, 999);
  let digits;
  if (n < 10) digits = 'однозначное';
  else if (n < 100) digits = 'двузначное';
  else digits = 'трехзначное';
  return `${n % 2 === 0 ? 'четное' : 'нечетное'} ${digits} число`;
}
