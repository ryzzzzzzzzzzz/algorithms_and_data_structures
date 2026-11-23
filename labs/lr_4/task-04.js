/*
4. Палиндром: Напишите функцию, которая рекурсивно проверяет, является ли заданная строка палиндромом.
*/

import { text, requireCondition } from '../../lib/input.js';
export const title = 'Рекурсивная проверка палиндрома';
export const example = ['топот'];

export default function solve(value) {
  const characters = Array.from(text(value));
  requireCondition(characters.length <= 2000, 'Для рекурсии допускается до 2000 символов.');
  function palindrome(left, right) {
    if (left >= right) return true;
    return characters[left] === characters[right] && palindrome(left + 1, right - 1);
  }
  return palindrome(0, characters.length - 1);
}
