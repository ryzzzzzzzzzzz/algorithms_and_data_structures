/*
9. Дано целое число в диапазоне 100–999. Вывести строку-описание данного числа, например: 256 — «двести пятьдесят шесть», 814 — «восемьсот четырнадцать».
*/

import { integer } from '../../lib/input.js';
import { numberToWords } from '../../lib/russian.js';
export const title = 'Трёхзначное число прописью';
export const example = [256];

export default function solve(n) {
  integer(n, 'n', 100, 999);
  return numberToWords(n);
}
