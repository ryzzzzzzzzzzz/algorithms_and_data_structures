/*
Используя словесное описание реализовать работу с очередью
*/

import { requireCondition } from '../../lib/input.js';
export const title = 'Очередь FIFO';
export const example = [[
  ['enqueue', 1], ['enqueue', 2], ['enqueue', 3], ['dequeue'],
  ['peek'], ['contains', 3], ['size'], ['isEmpty'], ['toArray'],
]];

export class Queue {
  #head = null;
  #tail = null;
  #size = 0;

  get size() { return this.#size; }
  isEmpty() { return this.#size === 0; }

  enqueue(value) {
    const node = { value, next: null };
    if (this.#tail) this.#tail.next = node;
    else this.#head = node;
    this.#tail = node;
    return ++this.#size;
  }

  dequeue() {
    requireCondition(!this.isEmpty(), 'Нельзя извлечь элемент из пустой очереди.');
    const value = this.#head.value;
    this.#head = this.#head.next;
    this.#size--;
    if (this.isEmpty()) this.#tail = null;
    return value;
  }

  peek() {
    requireCondition(!this.isEmpty(), 'Нельзя посмотреть начало пустой очереди.');
    return this.#head.value;
  }

  contains(value) {
    for (const item of this) {
      if (item === value || Object.is(item, value)) return true;
    }
    return false;
  }

  clear() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
    return null;
  }

  *[Symbol.iterator]() {
    for (let node = this.#head; node; node = node.next) yield node.value;
  }

  toArray() { return Array.from(this); }
}

export default function solve(operations) {
  requireCondition(Array.isArray(operations) && operations.length <= 100000,
    'Ожидается массив не более чем из 100000 операций.');
  const queue = new Queue();
  const results = [];
  const withArgument = new Set(['enqueue', 'contains']);
  const withoutArgument = new Set(['dequeue', 'peek', 'size', 'isEmpty', 'clear', 'toArray']);
  for (const operation of operations) {
    requireCondition(Array.isArray(operation) && typeof operation[0] === 'string',
      'Операция задаётся массивом: ["enqueue", значение] или ["dequeue"].');
    const [name, value] = operation;
    requireCondition(withArgument.has(name) || withoutArgument.has(name), 'Неизвестная операция очереди: ' + name);
    requireCondition(operation.length === (withArgument.has(name) ? 2 : 1), 'Неверное число аргументов операции ' + name);
    const result = name === 'size' ? queue.size : queue[name](...(withArgument.has(name) ? [value] : []));
    results.push({ operation: name, result });
  }
  return { results, queue: queue.toArray() };
}
