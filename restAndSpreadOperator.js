// Given this function:
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
//   Refactor it to use the rest operator & an arrow function:
const filterOdds = arr => [...arr].filter(n=>n%2===0);

// const filterOdds = (...arr) => arr.filter(n => n % 2 ===0);

const findMin = (...args) => args.Math.min();


const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2}); 


const doubleAndReturnArgs = (arr, ...args) => ([...arr,...args.map((n)=>n*2)]);


/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
}

const removeRandom1 = items => { 
    const newArr = ...items;
    let index = items.length * Math.random(Math.floor());
    newArr.Splice(index, 1);
    return newArr;
}


/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
}
const extend1 = (arr1,arr2) => ([...arr1,...arr2]);

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
}
const addKeyVal1 = (obj, key, val) => ({...obj, [key] : val});



/** Return a new object with a key removed. */

function removeKey(obj, key) {
}
const removeKey1 = (obj,key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj 
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
}
const combine1 = (obj1,obj2) => ({...obj1,...obj2})


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
}
const update1= = (obj, key, val) => ({...obj, [key]: val});
