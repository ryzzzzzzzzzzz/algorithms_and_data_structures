/*
1. Дано вещественное число — цена 1 кг конфет. Вывести стоимость 0.1, 0.2, . . . , 1 кг конфет.
*/

import { number, requireCondition } from '../../lib/input.js';
export const title = 'Стоимость конфет от 0,1 до 1 кг';
export const example = [250];

export default function solve(price) {
  number(price, 'Цена');
  requireCondition(price >= 0, 'Цена не может быть отрицательной.');
  const result = [];
  for (let tenth = 1; tenth <= 10; tenth++) {
    result.push({ weight: tenth / 10, cost: price * tenth / 10 });
  }
  return result;
}
