/*
1. Даны две переменные целого типа: A и B. Если их значения не равны, то присвоить каждой переменной большее из этих значений, а если равны, то присвоить переменным нулевые значения. Вывести новые значения переменных A и B.
*/

import { integer } from '../../lib/input.js';
export const title = 'Замена двух целых чисел';
export const example = [4, 9];

export default function solve(a, b) {
  integer(a, 'A');
  integer(b, 'B');
  if (a === b) return { a: 0, b: 0 };
  const greater = a > b ? a : b;
  return { a: greater, b: greater };
}
