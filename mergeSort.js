function merge(arr1, arr2) {
    console.log('merging')
    console.log({arr1}, {arr2});
    let mergedArray = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            mergedArray.push(arr1[i])
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while( i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while( j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

console.log({mergedArray});
    return mergedArray;
}



function mergeSort(arr) {
    console.log(arr)
    if(arr.length <=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9, 0]));
