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

console.log(validAnagram('qwerty', 'qweryt'))