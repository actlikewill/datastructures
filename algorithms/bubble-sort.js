function bubbleSort(arr) {
    let noSwaps;
    for(let i = arr.length; i > 0; i-- ) {
        noSwaps = true;
        for(let j = 0; j < i -1; j++ ) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

const arr = [ 3, 2, 8, 4, 1]

console.log(bubbleSort(arr))

