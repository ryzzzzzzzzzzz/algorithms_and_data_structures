/*
5. Дан массив A размера N. Вывести вначале его элементы с нечетными номерами в порядке возрастания номеров, а затем — элементы с четными номерами в порядке убывания номеров
*/

import { numbers } from '../../lib/input.js';
export const title = 'Нечётные номера вперёд, чётные назад';
export const example = [[10, 20, 30, 40, 50, 60]];

export default function solve(values) {
  numbers(values);
  const result = [];
  for (let i = 0; i < values.length; i += 2) result.push(values[i]);
  const lastEvenIndex = values.length % 2 === 0 ? values.length - 1 : values.length - 2;
  for (let i = lastEvenIndex; i >= 1; i -= 2) result.push(values[i]);
  return result;
}
