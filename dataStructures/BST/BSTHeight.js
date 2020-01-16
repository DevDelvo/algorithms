class Node {
    constructor(left, right, value) {
      this.left = left;
      this.right = right;
      this.value = value;
    }
  }
  
  const getHeight = (root) => {
    let height = 0;
    const stack = [[root, 1]];
  
    while (stack.length > 0) {
      const [current, level] = stack.pop();
      if (level > height) {
        height = level;
      }
    
      if (current.left) {
        stack.push([current.left, level + 1]);
      }
      if (current.right) {
        stack.push([current.right, level + 1]);
      }
    }
    return height;
  }
  
  //    1
  //   1  10
  //  3 2
  // 4 
  
  const tree = new Node(
    new Node(
      new Node(
        null,
        new Node(
          null,
          null,
          4
        ),
        3
      ),
      new Node(
        null,
        null,
        2
      ),
      1
    ),
    new Node(
      null,
      null,
      10
    ),
    1
  );
  
  getHeight(tree);
  
  