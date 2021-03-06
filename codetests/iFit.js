function tripleThreat(a) {
  for (let i = 0; i < a.length - 2; i++) {
    if ((a[i] + 1 === a[i + 1]) && (a[i + 1] + 1 === a[i + 2])) return 1;
  }
  return 0;
}

// console.log(tripleThreat([0, 4, 5, 6, 10, 12])) // 1



// We need to deliver a package of cookies bags.  You will be given an inventory of small bags (1 kilo each) and big bags
// (5 kilos each) along with the goal amount of kilos we need to ship the customer.  Return the amount of small bags the package
// will contain assuming we always use big bags first.  Return -1 if it cannot be done.
// Input
// small (type: int) - The number of small bags we have to work with
// big (type: int) - The number of big bags we have to work with
// goal (type: int) - The goal weight of the package that we need to ship out
// Output
// In of how many small bags to use, if there isn't enough return -1.


function createPackage(small, big, goal) {
  while (goal >= 5 && big > 0) {
    goal -= 5;
    big--;
  }
  if (goal > small) {
    return -1;
  }
  return goal;
}

// console.log(createPackage(9, 2, 9)); // 4

// check if leaves are equal

const tree = {
  a: 1,
  b: 1,
  c: {
    c1: 1,
    c2: 2,
    c3: 1,
    c4: {
      c41: 1,
      c42: 1
    }
  },
  d: 1
}

const tree2 = {
  a: 1,
  b: 1,
  c: {
    c1: 1,
    c2: 1,
    c3: 1,
    c4: {
      c41: 1,
      c42: 1
    }
  },
  d: 1
}

const tree3 = {
  a: 1,
  b: 1,
  c: {
    c1: 1,
    c2: 2,
    c3: 1,
    c4: {
      c41: 1,
      c42: 2
    }
  },
  d: 1
}

function areLeavesEqual(tree) {
  let initialValue = null;

  for (const key in tree) {
    const branch = tree[key];
    if (typeof branch === 'number') {
      if (initialValue === null) initialValue = branch;
      if (initialValue) {
        if (branch !== initialValue) return false;
      }
    } else if (typeof branch === 'object') {
      return areLeavesEqual(branch);
    }
  }

  return true;
}


console.log(areLeavesEqual(tree)); // false
console.log(areLeavesEqual(tree2)); // true
console.log(areLeavesEqual(tree3)); // false