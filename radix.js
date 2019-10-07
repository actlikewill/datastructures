function sort(arr) {
    let maxDigitCount = mostDigits(arr);
    for(let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for(let i = 0; i < arr.length; i++) {
            digitBuckets[getDigit(arr[i], k)].push(arr[i]); 
        }
        arr = [].concat(...digitBuckets);
    }
    return arr;
    
};


function getDigit(num, d) {
     return Math.floor(Math.abs(num) / Math.pow(10, d)) % 10;
}

function digitCount(num) {
    if(num === 0 ) return 1;
    return Math.floor(Math.log10(Math.abs(num))) +1
}

function mostDigits(num) {
    let maxDigits = 0;
    for( let i = 0; i < num.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(num[i]));
    }

     return maxDigits;
}

sort([999, 2345, 35556, 44, 25, 63, 77, 788])

module.exports = {
    sort,
    getDigit
}