/*
8. Дано целое число в диапазоне 10–40, определяющее количество учебных заданий по некоторой теме. Вывести строку-описание указанного количества заданий, обеспечив правильное согласование числа со словами «учебное задание», например: 18 — «восемнадцать учебных заданий».
*/

import { integer } from '../../lib/input.js';
import { numberToWords } from '../../lib/russian.js';
export const title = 'Количество учебных заданий прописью';
export const example = [22];

export default function solve(n) {
  integer(n, 'Количество', 10, 40);
  const lastTwo = n % 100;
  let form = 'учебных заданий';
  if (lastTwo < 11 || lastTwo > 14) {
    if (n % 10 === 1) form = 'учебное задание';
    else if (n % 10 >= 2 && n % 10 <= 4) form = 'учебных задания';
  }
  return `${numberToWords(n).replace(/один$/u, 'одно')} ${form}`;
}
