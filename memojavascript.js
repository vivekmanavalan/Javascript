const add = () => {
	const cache = {};
  	return function (num){
    	if(num in cache){
        	return 'From cache '+ cache[num];
        } else {
        	cache[num] = num + 10;
          	return 'calculating num '+ cache[num];
        }
    }
}

const addFunction = add();
console.log(addFunction(10));
console.log(addFunction(10));
console.log(addFunction(5 * 2));

const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
  myPromise().then(res => console.log(res));
  console.log('first');
}

async function secondFunction() {
  console.log(myPromise());
  console.log('second');
}

firstFunction();
secondFunction();