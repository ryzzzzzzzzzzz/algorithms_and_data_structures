/*
9. Дана матрица размера M × N. Упорядочить ее строки так, чтобы их первые элементы образовывали возрастающую последовательность.
*/

import { matrix } from '../../lib/input.js';
export const title = 'Упорядочение строк по первому элементу';
export const example = [[[5, 1], [2, 9], [3, 4]]];

export default function solve(values) {
  matrix(values);
  return values.map((row) => [...row]).sort((first, second) => first[0] - second[0]);
}
