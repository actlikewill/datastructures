const t = require('tap');

function validAnagram(s1, s2) {
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    if(s1.length !== s2.length) return false;

    for( let val of s1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
      }
      for( let val of s2) {
       
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
      }

      for( let val in frequencyCounter1) {
          if(frequencyCounter1[val] !== frequencyCounter2[val]) {
            return false;
          }
      }

      return true;

}

function sameFrequency(x, y){
    const xtoString = `${x}`;
    const ytoString = `${y}`;

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for( let val of xtoString) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
      }
    for( let val of ytoString) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for( let val in frequencyCounter1) {
        if(frequencyCounter1[val] !== frequencyCounter2[val]) {
          return false;
        }
    }
    return true;
  }

  t.equal(sameFrequency(182, 281), true);
