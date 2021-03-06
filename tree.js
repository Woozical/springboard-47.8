/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree using depth-first traversal. */

  sumValues() {
    let sum = 0;
    const travStack = this.root ? [this.root] : [];
    while (travStack.length){
      let current = travStack.pop();
      sum += current.val;
      for (let child of current.children) travStack.push(child);
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values using depth-first traversal. */

  countEvens() {
    let count = 0;
    const travStack = this.root ? [this.root] : [];
    while (travStack.length){
      let current = travStack.pop();
      count = (current.val % 2 === 0) ? (count + 1) : count;
      for (let child of current.children) travStack.push(child);
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;
    const travStack = this.root ? [this.root] : [];
    while (travStack.length){
      let current = travStack.pop();
      count = (current.val > lowerBound) ? (count + 1) : count;
      for (let child of current.children) travStack.push(child);
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
