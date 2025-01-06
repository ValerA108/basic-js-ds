const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = []; // Массив для хранения элементов стека
  }

  // Метод добавления элемента в стек
  push(element) {
    this.items.push(element); // Добавляем элемент в конец массива
  }

  // Метод удаления и возврата верхнего элемента стека
  pop() {
    return this.items.pop(); // Удаляем и возвращаем последний элемент массива
  }

  // Метод для просмотра верхнего элемента стека (без удаления)
  peek() {
    return this.items[this.items.length - 1]; // Возвращаем последний элемент массива, не удаляя его
  }
}

module.exports = {
  Stack,
};
