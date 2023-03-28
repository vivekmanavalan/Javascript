const obj = { 
    name: 'Version 1', 
    additionalInfo: { 
        version: 1,
        otherVersion: {
        prod: 3,
        age: 25 },
      } 
    };

//Shallow copy an object it does deep copy of only the root elements the nested properties are shallow copied
const shallowCopy = {...obj};
shallowCopy.name = "Vivek";
shallowCopy.additionalInfo.version = 2;
console.log("shallowCopy", shallowCopy);
console.log('original obj', obj);
//referencing the same object
const refCopy = obj;
refCopy.name = 'dog';
console.log('Referencing the same object',obj);
//Deep copy of an object creates a entirely new object
const deepCopy = JSON.parse(JSON.stringify(obj));
deepCopy.name = 'Batman';
console.log('deep copied object', deepCopy);
console.log('original object', obj);

a = 2;
console.log(a);
var a;

var ex = {
    a: {
        b:{
            c: 12
        },
        d:{
            e:'vivek'
        }
    }
};

const findPath = (obj, key) => {
    return key.split('.').reduce((o, x) => {
        return o[x];
    },obj)
}

console.log('findpath', findPath(ex, 'a.b.c'));
console.log("values", Object.values(ex));
console.log("entries", Object.entries(ex));
console.log('object', Object.keys(ex));

const diffArray = [23, 'vivek', 12.2];

console.log('excluding a property from an object');
console.log(deepCopy);

//To find a key in a nested object
const keyExists = (obj, key) => {
    if (!obj || (typeof obj !== "object" && !Array.isArray(obj))) {
      return false;
    }
    else if (obj.hasOwnProperty(key)) {
      return true;
    }
    // else if (Array.isArray(obj)) {
    //   for (let i = 0; i < obj.length; i++) {
    //     const result = keyExists(obj[i], key);
    //     if (result) {
    //       return result;
    //     }
    //   }
    // }
    else {
      for (const k in obj) {
        console.log('obj', obj);
        console.log('k', k);
        const result = keyExists(obj[k], key);
        if (result) {
          return result;
        }
      }
    }
  
    return false;
  };

  console.log('Object', keyExists(deepCopy, 'prod'));

