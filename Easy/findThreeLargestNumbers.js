//Find Three Largest Numbers 

//Write a function that takes in an array of integers and returns a sorted array of the 3 largest integers in the input array.
//Note that the function should return duplicates if necessary;
//for example, it returns [10,10,12] for an input array of [10,5,9,10,12];

//Sample input: [141,1,17,-7,-17,-27,18,541,8,7,7]
//Sample output: [18,141,541]


// O(n) time O(1) space
function findThreeLargestNumbers (arr) {
    const bigThree = [null, null, null]; //initialize array
    arr.forEach(num => { //traverse and update the array
        updateLargest(bigThree, num);
    });
    console.log(bigThree)
    return bigThree;
}

function updateLargest(bigThree, num) {
    if (bigThree[2] === null || num > bigThree[2]) {
        shiftAndUpdate(bigThree, num, 2);
    } else if (bigThree[1] === null || num > bigThree[1]) {
        shiftAndUpdate(bigThree, num, 1);
    } else if (bigThree[0] === null || num > bigThree[0]) {
        shiftAndUpdate(bigThree, num, 0);
    }
}

function shiftAndUpdate(arr, num, idx) {
    for (let i = 0; i <= idx; i++) {
        if (i === idx) {
            arr[i] = num;
        } else {
            arr[i] = arr[i + 1];
        }
    }
}

findThreeLargestNumbers([141,1,17,-7,-17,-27,18,541,8,7,7])