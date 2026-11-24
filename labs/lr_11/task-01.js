/*
Используя словесное описание реализовать обход дерева
*/

import { numbers, number, requireCondition } from '../../lib/input.js';
export const title = 'Бинарное дерево: вставка, поиск, удаление и обходы';
export const example = [[50, 30, 20, 40, 70, 60, 80], 40, []];

export class TreeNode {
  constructor(value, parent = null) {
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  get children() { return [this.left, this.right].filter((node) => node !== null); }

  get depth() {
    let depth = 0;
    for (let node = this.parent; node; node = node.parent) depth++;
    return depth;
  }
}

export class BinarySearchTree {
  constructor() { this.root = null; }

  insert(value) {
    number(value, 'Значение узла');
    if (!this.root) return (this.root = new TreeNode(value));
    let current = this.root;
    while (true) {
      // Равные значения помещаются в правое поддерево.
      const side = value < current.value ? 'left' : 'right';
      if (!current[side]) return (current[side] = new TreeNode(value, current));
      current = current[side];
    }
  }

  find(value) {
    number(value, 'Искомое значение');
    let node = this.root;
    while (node && node.value !== value) node = value < node.value ? node.left : node.right;
    return node;
  }

  remove(value) {
    let node = this.find(value);
    if (!node) return false;
    if (node.left && node.right) {
      let successor = node.right;
      while (successor.left) successor = successor.left;
      node.value = successor.value;
      node = successor;
    }
    const child = node.left || node.right;
    if (child) child.parent = node.parent;
    if (!node.parent) this.root = child;
    else if (node.parent.left === node) node.parent.left = child;
    else node.parent.right = child;
    node.parent = null;
    node.left = null;
    node.right = null;
    return true;
  }

  inorder() {
    const values = [];
    const stack = [];
    let node = this.root;
    while (node || stack.length) {
      while (node) { stack.push(node); node = node.left; }
      node = stack.pop();
      values.push(node.value);
      node = node.right;
    }
    return values;
  }

  preorder() {
    const values = [];
    const stack = this.root ? [this.root] : [];
    while (stack.length) {
      const node = stack.pop();
      values.push(node.value);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
    return values;
  }

  levelOrder() {
    const queue = this.root ? [this.root] : [];
    const values = [];
    for (let head = 0; head < queue.length; head++) {
      const node = queue[head];
      values.push(node.value);
      queue.push(...node.children);
    }
    return values;
  }

  get height() {
    if (!this.root) return 0;
    const queue = [{ node: this.root, level: 1 }];
    let height = 0;
    for (let head = 0; head < queue.length; head++) {
      const { node, level } = queue[head];
      height = level;
      for (const child of node.children) queue.push({ node: child, level: level + 1 });
    }
    return height;
  }
}

export default function solve(values, target = null, removals = []) {
  numbers(values);
  numbers(removals);
  requireCondition(values.length <= 1000 && removals.length <= 1000, 'Допускается до 1000 узлов и 1000 удалений.');
  const tree = new BinarySearchTree();
  for (const value of values) tree.insert(value);
  const removed = removals.map((value) => ({ value, removed: tree.remove(value) }));
  let search = null;
  if (target !== null) {
    const node = tree.find(target);
    search = {
      value: target,
      found: node !== null,
      depth: node ? node.depth : null,
      parent: node && node.parent ? node.parent.value : null,
      children: node ? node.children.map((child) => child.value) : [],
    };
  }
  return {
    inorder: tree.inorder(),
    preorder: tree.preorder(),
    levelOrder: tree.levelOrder(),
    height: tree.height,
    search,
    removed,
  };
}
