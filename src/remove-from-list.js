const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // Используем dummy узел для упрощения логики
  let dummy = new ListNode(0); // Новый узел, который будет предшествовать началу списка
  dummy.next = l; // Связываем его с первым элементом
  let current = dummy; // Начинаем обход с dummy узла

  // Проходим по списку
  while (current.next !== null) {
    if (current.next.value === k) {
      // Если значение текущего узла равно k, удаляем его
      current.next = current.next.next; // Перескакиваем через этот узел
    } else {
      // Если значение не равно k, просто переходим к следующему узлу
      current = current.next;
    }
  }

  // Возвращаем новый список, начиная с первого узла
  return dummy.next;
}

module.exports = {
  removeKFromList,
};
