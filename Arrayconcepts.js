const calc = (...args) => {
    console.log('args', args);
    return args.reduce((res,x) => {
        return res+x;
    });
}

console.log(calc(1,2,3,4,5,56));


//Flatten Array:

const flatten = (arr) => {
    return arr.reduce((acc, item) => {
      console.log("item", item);
      if(Array.isArray(item)){
        return acc.concat(flatten(item));
      }
      else {
        return acc.concat(item);
      }
    }, [])
  }

  const arr = [1,2,[3,4],[[5,6,7]],8];
  console.log('flatten', flatten(arr));


  //Swap values without temp variables
  let a = 10;
  let b = 20;
  [a,b] = [b,a];
  console.log(`a: ${a}, b: ${b}`);

//Largest number in the array
const numArr = [1,13,3454,56,6786,2];
console.log('largest number in array', Math.max(...numArr));

console.log('.....................');
console.log('Duplicate the array');
let array1 = [1,2,3,4,5];

let array2 = array1.concat(array1);
console.log(array2);


//Sort array in ascending order
console.log('ascending sort', numArr.sort((a,b) => a-b));
//Sort array in descending order
console.log('descending sort', numArr.sort((a,b) => b-a));


//Removing Duplicates
const array = [1,1,2,3,4];
console.log('removing dup filter', array.filter((x,i) => array.indexOf(x) === i));
console.log('removing dup set', [...new Set(array)]);


//Looping 
// 'of' takes the value of the array
// 'in' takes the index of the element
for(const i of array){
    console.log('item from array', i);
}