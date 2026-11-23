/*
9. Напишите рекурсивное решение головоломки "Ханойская башня".
*/

import { integer, requireCondition } from '../../lib/input.js';
export const title = 'Ханойская башня';
export const example = [3];

export default function solve(n, from = 'A', to = 'C', auxiliary = 'B') {
  integer(n, 'Количество дисков', 0, 16);
  requireCondition([from, to, auxiliary].every((v) => typeof v === 'string' && v.length > 0)
    && new Set([from, to, auxiliary]).size === 3, 'Имена трёх стержней должны быть различными непустыми строками.');
  const moves = [];
  function move(count, source, destination, spare) {
    if (count === 0) return;
    move(count - 1, source, spare, destination);
    moves.push({ disk: count, from: source, to: destination });
    move(count - 1, spare, destination, source);
  }
  move(n, from, to, auxiliary);
  return { count: moves.length, moves };
}
