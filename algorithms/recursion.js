function countDown (num) {
    if(num <= 0) {
        console.log('all done!');
        return ;
    }
    console.log(num);
    num --
    countDown(num);
}

function power(base, exponent) {
    if (exponent == 0) {return 1;}
    else {return base * power(base, exponent -1)}
}

console.log(power(2, 3))