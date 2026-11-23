/*
10. Дан целочисленный массив размера N, содержащий ровно два одинаковых элемента. Найти номера одинаковых элементов и вывести эти номера в порядке возрастания
*/

import { integers, requireCondition } from '../../lib/input.js';
export const title = 'Номера двух одинаковых элементов';
export const example = [[8, 3, 5, 3, 1]];

export default function solve(values) {
  integers(values, 2);
  const positions = new Map();
  let result = null;
  for (let i = 0; i < values.length; i++) {
    if (positions.has(values[i])) {
      requireCondition(result === null, 'Должна быть ровно одна пара одинаковых элементов.');
      result = [positions.get(values[i]) + 1, i + 1];
    } else positions.set(values[i], i);
  }
  requireCondition(result !== null, 'Пара одинаковых элементов не найдена.');
  return result;
}
