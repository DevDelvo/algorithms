    //     1 = p                           1 = q     
    //   /   \                           /   \
    //  2                             2      
    //    node.left, node.right, node.val
    // 
    
    function areTreesSame(p, q) {
        if (p === null &&  q === null) return true;
        if ((p && q === null) || (p === null && q)) return false;
        if (p.val !== q.val) return false;
        
        const leftBool = areTreesSame(p.left, q.left);
        const rightBool = areTreesSame(p.right, q.right);
        return leftBool && rightBool;
      }
      
      // in order traversal
      // check if values are the same, if not return false
      // in order => 
      
  // https://leetcode.com/problems/same-tree/