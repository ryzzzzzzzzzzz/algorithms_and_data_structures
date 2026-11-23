import { integer } from './input.js';

const units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
const teens = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать',
  'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
const tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят',
  'семьдесят', 'восемьдесят', 'девяносто'];
const hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот',
  'семьсот', 'восемьсот', 'девятьсот'];

export function numberToWords(n) {
  integer(n, 'n', 0, 999);
  if (n === 0) return 'ноль';
  const parts = [];
  if (n >= 100) parts.push(hundreds[Math.floor(n / 100)]);
  const rest = n % 100;
  if (rest >= 10 && rest <= 19) parts.push(teens[rest - 10]);
  else {
    if (rest >= 20) parts.push(tens[Math.floor(rest / 10)]);
    if (rest % 10 !== 0) parts.push(units[rest % 10]);
  }
  return parts.join(' ');
}
