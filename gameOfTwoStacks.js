// Alexa has two stacks of non-negative integers, stack A = [a0, a1, ..., a(n-1)]and stack B = [b0, b1, ..., b(n-1)] where index 0 denotes the top of the stack.
// Alexa challenges Nick to play the following game:

// In each move, Nick can remove one integer from the top of either stack A or stack B.
// Nick keeps a running sum of the integers he removes from the two stacks.
// Nick is disqualified from the game if, at any point, his running sum becomes greater than some integer  given at the beginning of the game.
// Nick's final score is the total number of integers he has removed from the two stacks.
// Given A, B, and x for g games, find the maximum possible score Nick can achieve (i.e., the maximum number of integers he can remove without being disqualified) during each game and print it on a new line.

// function gameOfTwoStacks(a, b, x) {
//     const stackASums = [...a];
//     const stackBSums = [...b];
//     let idxA = stackASums.length - 1;
//     let idxB = stackBSums.length - 1;
//     let sum = 0;
//     for (let i = 1; i < a.length; i++) {
//         stackASums[i] = stackASums[i-1] + stackASums[i];
//     }
//     for (let i = 1; i < b.length; i++) {
//         stackBSums[i] = stackBSums[i-1] + stackBSums[i];
//     }

//     while (stackASums[idxA] > x) {
//         idxA--;
//     }
//     while (stackBSums[idxB] > x) {
//         idxB--;
//     }

//     idxA = Math.floor(stackASums[idxA] / (idxA + 1));
//     idxB = Math.floor(stackBSums[idxB] / (idxB + 1));
//     if (stackASums[idxA] > stackBSums[idxB]) {
//         idxA = idxB;
//     } else if (stackBSums[idxA] < stackBSums[idxB]) {
//         idxB = idxA;
//     }

//     return idxA + idxB + 2;
// }

function gameOfTwoStacks(a, b, x) {
    debugger;
    let c = [];
    let mNum = 0;
    let sumA = 0;
    let sumB = 0;
    while (a.length) {
        if (sumA + a[0] <= x) {
            c.push(a.shift());
            sumA += c[c.length-1];
            mNum++;
        } else {
            break;
        }
    }

    while (b.length) {
        if (sumB + b[0] <= x) {
            if (sumA + b[0] <= x) {
                let el = b.shift();
                sumA += el;
                sumB += el;
                mNum += 1;
            } else {
                let el = b.shift();
                sumA += el - c.pop();
                sumB += el;
            }
        } else {
            break;
        }
    }
    return mNum;
}

const testStackA = [4, 2, 4, 6, 1];
const testStackB = [2, 1 ,8 , 5];
const x = 10;
// const testStackA = [5, 15, 30];
// const testStackB = [5, 5, 20, 5];
// const x = 40;

console.log(gameOfTwoStacks(testStackA, testStackB, x));