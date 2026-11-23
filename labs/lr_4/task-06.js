/*
6. Обратный порядок слов: Напишите функцию, которая рекурсивно меняет порядок слов в заданной строке на обратный.
*/

import { text, requireCondition } from '../../lib/input.js';
export const title = 'Рекурсивный разворот порядка слов';
export const example = ['один два три'];

export default function solve(value) {
  const input = text(value).trim();
  const words = input === '' ? [] : input.split(/\s+/u);
  requireCondition(words.length <= 1000, 'Для рекурсии допускается до 1000 слов.');
  const reversed = [];
  function reverse(index) {
    if (index < 0) return;
    reversed.push(words[index]);
    reverse(index - 1);
  }
  reverse(words.length - 1);
  return reversed.join(' ');
}
