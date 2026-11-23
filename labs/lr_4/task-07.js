/*
7. Разложение числа на сумму простых чисел: Напишите функцию, которая рекурсивно разлагает заданное число на сумму простых чисел.
*/

import { integer } from '../../lib/input.js';
export const title = 'Рекурсивное разложение в сумму простых';
export const example = [20];

export default function solve(n) {
  integer(n, 'n', 2, 10000);
  const primes = [];
  for (let candidate = 2; candidate <= n; candidate++) {
    let prime = true;
    for (let divisor = 2; divisor * divisor <= candidate; divisor++) {
      if (candidate % divisor === 0) { prime = false; break; }
    }
    if (prime) primes.push(candidate);
  }
  // Возвращается одно разложение. Повторения простых слагаемых разрешены.
  function decompose(remainder, maxIndex) {
    if (remainder === 0) return [];
    if (remainder < 2) return null;
    for (let i = maxIndex; i >= 0; i--) {
      if (primes[i] > remainder) continue;
      const rest = decompose(remainder - primes[i], i);
      if (rest !== null) return [primes[i], ...rest];
    }
    return null;
  }
  return decompose(n, primes.length - 1);
}
