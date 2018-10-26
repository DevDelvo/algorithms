// Write a function for doing an in-place ↴ shuffle of a list.

// The shuffle must be "uniform," meaning each item in the original list must have the same probability of ending up in each spot in the final list.

// Assume that you have a function get_random(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.

//  This is known as the Fisher-Yares shuffle! (Sometimes called the Knuth shuffle)

// Complexity
// O(n) and O(1) space

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function shuffle(arr) {
    // If there are only 1 or less items, just return
    if (arr.length <= 1) return;

    for (let idxWeAreChoosing = 0; idxWeAreChoosing < arr.length - 1; idxWeAreChoosing++) {
        // Choose random not-yet-placed item to place
        // (could also be the item currently in that spot)
        // must be an item after the current item because all the previous items have already been placed
        const randomIdx = getRandom(idxWeAreChoosing, arr.length - 1);
        
        // Place our random choice in the spot for swapping
        if (idxWeAreChoosing !== randomIdx) {
            swap(arr, randomIdx, idxWeAreChoosing);
        }
    }
}

const testArr = [1, 2, 3, 4, 5];
shuffle(testArr)
console.log(testArr);
