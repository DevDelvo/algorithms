// A format for expressing an ordered list of integers is to use a comma separated list of either:

// individual integers
// a range of integers denoted by the starting integer separated from the end integer in the range by a dash, -.
// the range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example 12, 13, 15-17
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])

// returns (-6,-3-1,3-5,7-11,14,15,17-20)

function rangeExtraction(arr) {
    if (!arr.length) return 0;
    if (arr.length === 1) return arr[0];
    let res = '';
    let range = [arr[0]];
    let pointer1 = 0;
    let pointer2 = 1;
    while (pointer1 < arr.length) {
        if (pointer1 !== pointer2 && arr[pointer1] + 1 !== arr[pointer2] && range.length === 1) {
            console.log('arr[pointer1] => ', arr[pointer1])
            res += arr[pointer1].toString() + ',';
            range = [];
            pointer1++;
        } else if (arr[pointer2 + 1] === arr[pointer2] + 1 && range.length === 0) { // when the next number after pointer2 is +1, put them into range array
            console.log('push new range')
            range.push(arr[pointer2]);
            console.log('new range => ', range)
            // pointer2++;
        } else if (arr[pointer2 + 1] === arr[pointer2] + 1 && range.length) {
            console.log('push new range, range length > 0')
            range.push(arr[pointer2]);
            if (range[1] && range[1] !== range[0] + 1) range.shift();
            pointer2++;
        } else if (arr[pointer2 + 1] !== arr[pointer2] + 1) {// when the next number after pointer2 is NOT +1, add them to the res and reset array
            console.log('pointer1 => ', pointer1, 'pointer2 => ', pointer2)
            range.push(arr[pointer2]);
            console.log('final range => ', range)
            range.length >= 3 ? res += range[0].toString() + '-' + range[range.length - 1].toString() + ',' : range.length === 2 ? res += range[0] + ',' + range[1] + ',' : res += range[0] + ",";
            console.log('res after final range => ', res)
            range = []; // reset array
            pointer1 = pointer2; // jumpstart pointer 1 to pointer 2
            pointer1++; //skip pointer1 to avoid duplicate
            pointer2++;
        }
    }
    return res[res.length - 1] === ',' ? res.slice(0, res.length - 1) : res;
}

console.log(rangeExtraction([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])); //-6,-3-1,3-5,7-11,14,15,17-20
// console.log(rangeExtraction([1,2,3,4,5,6,7,8,9,10])); // 1,2,3,4,5,6,7,8,9,10
// console.log(rangeExtraction([1])) // 1
console.log(rangeExtraction([-3, -2, -1, 2, 10, 15, 16, 18, 19, 20])) //  -3--1,2,10,15,16,18-20
console.log(rangeExtraction([-55, -52, -50, -49, -48, -45, -42, -40, -37, -35, -34, -31, -28])) // -55,-52,-50--48,-45,-42,-40,-37,-35,-34,-31,-28