// current node => i
// child 1 => 2i +1
// child 2 => 2i +1

class MinHeap {
    constructor(arr) {
        this.heap = this.buildHeap(arr);
    }

    // O(n) time | O(1) space
    buildHeap(arr) {
        const firstParentIdx = Math.floor((arr.length - 2) / 2);
        for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
            this.siftDown(currentIdx, arr.length -1, arr);
        }
        return arr;
    }

    // O(log(n)) time | O(1) space
    siftDown(currentIdx, endIdx, heap) {
        let childOneIdx = currentIdx * 2 + 1;
        while (childOneIdx <= endIdx) {
            const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
            let idxToSwap;
            if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
                idxToSwap = childTwoIdx;
            } else {
                idxToSwap = childOneIdx;
            }
            if (heap[idxToSwap] < heap[currentIdx]) {
                this.swap(currentIdx, idxToSwap, heap);
                currentIdx = idxToSwap;
                childOneIdx = currentIdx * 2 + 1;
            } else {
                return;
            }
        }
    }

    // O(log(n)) time | O(1) space
    siftUp(currentIdx, heap) {
        let parentIdx = Math.floor((currentIdx -1) / 2);
        while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
            this.swap(currentIdx, parentIdx, heap);
            currentIdx = parentIdx;
            parentIdx = Math.floor((currentIdx - 1) / 2);
        }
    }

    // O(1) time | O(1) space
    peek() {
        return this.heap[0];
    }

    // O(llog(n)) time | O(1) space
    remove() {
        this.swap(0, this.heap.length - 1, this.heap); //swaps beginning and end
        const valueToRemove = this.heap.pop(); //removes the element at the end of the heap which was swapped
        this.siftDown(0, this.heap.length - 1, this.heap); //reassigns idices
        return valueToRemove; 
    }

    insert(value) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1, this.heap);
    }

    swap(i, j, heap) {
            [heap[i], heap[j]] = [heap[j], heap[i]];
        }
}


const test1 = new MinHeap([2, 3, 1]);
const test2 = new MinHeap([1, 2, 3, 4, 5, 6 ,7 ,8 ,9]);
const test3 = new MinHeap([48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]);
test3.insert(76);
test3.remove();
// test3.remove();
// test3.insert(87);

console.log(test3);