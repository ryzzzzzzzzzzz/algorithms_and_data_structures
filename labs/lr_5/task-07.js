/*
7. Дан целочисленный массив размера N, не содержащий одинаковых чисел. Проверить, образуют ли его элементы арифметическую прогрессию. Если образуют, то вывести разность прогрессии, если нет — вывести 0.
*/

import { integers, requireCondition } from '../../lib/input.js';
export const title = 'Разность арифметической прогрессии';
export const example = [[3, 7, 11, 15]];

export default function solve(values) {
  integers(values, 2);
  requireCondition(new Set(values).size === values.length, 'По условию все числа должны быть различными.');
  // BigInt сохраняет точность разностей даже для крайних безопасных целых.
  const difference = BigInt(values[1]) - BigInt(values[0]);
  for (let i = 2; i < values.length; i++) {
    if (BigInt(values[i]) - BigInt(values[i - 1]) !== difference) return 0;
  }
  if (difference > BigInt(Number.MAX_SAFE_INTEGER) || difference < BigInt(Number.MIN_SAFE_INTEGER)) return difference;
  return Number(difference);
}
