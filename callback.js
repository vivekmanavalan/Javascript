
const getNewArray = (arr, callback) => {
    const length = arr.length;
    arr.push(length);
    callback(arr);
}

const printArray = (arr) => {
    console.log('new Array', arr);
}

const mainfunc = () => {
    getNewArray([24,1,4,5], printArray);
}

mainfunc();

console.log('.....................');
console.log('Closure');

const createBase = (base) => {
    console.log('add seven', base); //7
    return innerfunc = (x) => {
        console.log(x+base);
    }
}

let addSeven = createBase(7);
addSeven(10); //expected output 17
addSeven(21); //expected output 28


 var Employee = {
    company: 'abc'
  }

  console.log('.....................');
console.log('Closure multiple');

const multiply = (x) => {
    console.log('x', x); //5
    return (y) => {
        console.log('multiply', x*y);
    }
}

const arithematic = multiply(5);
arithematic(6);
