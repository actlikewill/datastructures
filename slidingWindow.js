function maxSubArraySum (arr, d) {
   let result = 0;
    for(let i = 0; i < arr.length; i++) {
        let sums = 0;
        for(let j = 0; j < d; j++) {
            if(arr[j+i]) {
                sums += arr[j+i]
             
            }
        }
        result = sums > result ? sums : result;
    
    }
    return result;
}

function maxSumRefactor(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    for(let i = 0; i < num; i++) {
        maxSum += arr[i]
        // console.log({maxSum})
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++) {
        console.log(i- num)
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
        // console.log({tempSum},{maxSum})
    }
}


console.log(maxSumRefactor([1,2,5,5,3,1, 4, 5,6 ,7 ,4, 3, 6], 4));

const myArray = [1, 2, 5, 5, 3, 1, 4, 5, 6 ,7 ,4, 3, 6];
console.log(myArray[-3])