function minimumBribes(q) {
const changedPosition = q.map(ticket => {
    const position = q.indexOf(ticket)+1;
    return ticket - position;
});
if(!changedPosition.every(val => val < 3)) {
    return 'Too Chaotic';
}
const numberOfBribes = changedPosition.reduce((accumulator, currentValue) => {
    if(currentValue < 0) return accumulator;
    return currentValue + accumulator;
})
return numberOfBribes;
}

const initialQ = [1, 2, 3, 4, 5];
const finalQ = [2, 1, 5, 3, 4]

console.log(minimumBribes(finalQ))
