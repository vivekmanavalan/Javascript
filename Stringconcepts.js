
//Reverse each word in a string

console.log('.....................');
console.log('Reverse Each word in a sentence');

let sentence = 'hellos world';

const reverseWord = (val) => {
    let res = val.split("");
    console.log(res.reverse().join(""));

}

reverseWord(sentence);

console.log('.....................');
console.log('Anagrams or not');

const checkAnagram = (x,y) => {
    let xArray = x.split('').sort().join('');
    let yArray = y.split('').sort().join('');
    return xArray === yArray

}

 console.log(checkAnagram('listen','silent'));
 console.log(checkAnagram('listen','telecom'));
