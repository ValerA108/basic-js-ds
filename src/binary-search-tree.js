const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

// Основной класс для бинарного дерева поиска.
class BinarySearchTree {
  constructor() {
    this.rootNode = null; // Корень дерева изначально пуст
  }

  // Метод для получения корня дерева.
  root = () => this.rootNode;

  // Метод для добавления нового элемента в дерево.
  add = (data) => {
    const newNode = new Node(data); // Создаём новый узел с заданными данными
    if (!this.rootNode) {
      this.rootNode = newNode; // Если дерево пустое, новый узел становится корнем
    } else {
      this._addNode(this.rootNode, newNode); // В противном случае добавляем в дерево
    }
  };

  // Вспомогательный метод для добавления узла в дерево, начиная с заданного узла.
  _addNode = (node, newNode) => {
    // Если значение нового узла меньше текущего узла, идём влево
    if (newNode.data < node.data) {
      // Если слева от текущего узла есть потомок, рекурсивно продолжаем добавление
      node.left ? this._addNode(node.left, newNode) : (node.left = newNode);
    } else {
      // Если значение нового узла больше или равно текущему узлу, идём вправо
      node.right ? this._addNode(node.right, newNode) : (node.right = newNode);
    }
  };

  // Метод для проверки, есть ли узел с заданными данными в дереве.
  has = (data) => this._hasNode(this.rootNode, data);

  // Вспомогательный метод для поиска узла с данными в дереве.
  _hasNode = (node, data) => {
    // Если узел пуст, то его нет в дереве
    if (!node) return false;

    // Если данные меньше текущего узла, ищем в левом поддереве
    if (data < node.data) return this._hasNode(node.left, data);

    // Если данные больше текущего узла, ищем в правом поддереве
    if (data > node.data) return this._hasNode(node.right, data);

    // Если данные совпали с текущим узлом, значит узел найден
    return true;
  };

  // Метод для поиска узла с заданными данными в дереве.
  find = (data) => this._findNode(this.rootNode, data);

  // Вспомогательный метод для поиска узла с данными в дереве.
  _findNode = (node, data) => {
    // Если узел пуст, возвращаем null
    if (!node) return null;

    // Если данные меньше текущего узла, ищем в левом поддереве
    if (data < node.data) return this._findNode(node.left, data);

    // Если данные больше текущего узла, ищем в правом поддереве
    if (data > node.data) return this._findNode(node.right, data);

    // Если данные совпали с текущим узлом, возвращаем его
    return node;
  };

  // Метод для удаления узла с заданными данными из дерева.
  remove = (data) => {
    // Обновляем корень дерева после удаления узла
    this.rootNode = this._removeNode(this.rootNode, data);
  };

  // Вспомогательный метод для удаления узла с заданными данными.
  _removeNode = (node, data) => {
    // Если узел пуст, ничего не удаляем
    if (!node) return null;

    // Если данные меньше текущего узла, ищем в левом поддереве
    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
    }
    // Если данные больше текущего узла, ищем в правом поддереве
    else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
    }
    // Если данные совпали с текущим узлом, то этот узел нужно удалить
    else {
      // Если у узла нет детей, просто удаляем его
      if (!node.left && !node.right) return null;

      // Если у узла есть только один потомок (левый или правый), возвращаем его
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // Если у узла есть два потомка, заменяем его на минимальный элемент правого поддерева
      const minRightNode = this._findMinNode(node.right);
      node.data = minRightNode.data;
      node.right = this._removeNode(node.right, minRightNode.data);
    }

    return node;
  };

  // Метод для нахождения минимального элемента в дереве.
  min = () => {
    const minNode = this._findMinNode(this.rootNode);
    return minNode ? minNode.data : null; // Возвращаем значение минимального узла или null
  };

  // Вспомогательный метод для нахождения минимального узла в поддереве.
  _findMinNode = (node) => (!node.left ? node : this._findMinNode(node.left));

  // Метод для нахождения максимального элемента в дереве.
  max = () => {
    const maxNode = this._findMaxNode(this.rootNode);
    return maxNode ? maxNode.data : null; // Возвращаем значение максимального узла или null
  };

  // Вспомогательный метод для нахождения максимального узла в поддереве.
  _findMaxNode = (node) => (!node.right ? node : this._findMaxNode(node.right));
}

module.exports = {
  BinarySearchTree,
};
