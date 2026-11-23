/*
7. Даны положительные числа A и B (A > B). На отрезке длины A размещено максимально возможное количество отрезков длины B (без наложений). Не используя операции умножения и деления, найти длину незанятой части отрезка A.
*/

import { positive, requireCondition } from '../../lib/input.js';
export const title = 'Остаток отрезка без умножения и деления';
export const example = [10, 3];

// Перенос десятичной точки строками позволяет точно вычитать десятичные дроби.
function decimalParts(value) {
  const [mantissa, exponent = '0'] = value.toString().split('e');
  const [whole, fraction = ''] = mantissa.split('.');
  let digits = whole + fraction;
  let scale = fraction.length - Number(exponent);
  if (scale < 0) {
    digits += '0'.repeat(-scale);
    scale = 0;
  }
  return { digits, scale };
}

export default function solve(a, b) {
  positive(a, 'A');
  positive(b, 'B');
  requireCondition(a > b, 'Должно выполняться A > B.');
  const first = decimalParts(a);
  const second = decimalParts(b);
  const scale = Math.max(first.scale, second.scale);
  let remainder = BigInt(first.digits + '0'.repeat(scale - first.scale));
  const segment = BigInt(second.digits + '0'.repeat(scale - second.scale));
  let steps = 0;
  while (remainder >= segment) {
    requireCondition(steps < 1000000, 'Допускается не более 1000000 вычитаний.');
    remainder -= segment;
    steps++;
  }
  return Number(`${remainder}e-${scale}`);
}
