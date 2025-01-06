const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.head = null; // Указатель на первый элемент очереди
    this.tail = null; // Указатель на последний элемент очереди
  }

  // Метод для получения состояния очереди в виде связанного списка
  getUnderlyingList() {
    let currentNode = this.head; // Начинаем с первого элемента
    let result = null; // Результирующий список

    // Мы будем обходить очередь и строить новый список
    let temp = null;

    while (currentNode !== null) {
      temp = { value: currentNode.value, next: null }; // Создаём новый узел с данным значением

      if (result === null) {
        result = temp; // Если результат пуст, то это первый элемент
      } else {
        let lastNode = result;
        while (lastNode.next !== null) {
          lastNode = lastNode.next; // Находим последний узел
        }
        lastNode.next = temp; // Добавляем новый узел в конец списка
      }
      currentNode = currentNode.next; // Переходим к следующему узлу
    }

    return result;
  }

  // Метод для добавления элемента в очередь
  enqueue(value) {
    const newNode = new ListNode(value); // Создаём новый узел с данным значением

    if (!this.tail) {
      // Если очередь пуста, оба указателя (head и tail) указывают на новый узел
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Если очередь не пуста, добавляем новый узел в конец списка
      this.tail.next = newNode;
      this.tail = newNode; // Обновляем указатель на последний элемент
    }
  }

  // Метод для извлечения элемента из очереди
  dequeue() {
    if (!this.head) {
      return null; // Если очередь пуста, возвращаем null
    }

    const value = this.head.value; // Получаем значение первого узла
    this.head = this.head.next; // Сдвигаем указатель на первый элемент (удаляем его)

    if (!this.head) {
      this.tail = null; // Если очередь пуста после удаления, обновляем указатель на последний элемент
    }

    return value; // Возвращаем значение извлеченного элемента
  }
}

module.exports = {
  Queue,
};
