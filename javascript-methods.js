/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/
let myArr = [1, 2, 3, 4, 5]
// MAP //
Array.prototype.myMap = function (callbackFn) {
  // Place your code here.
  let tempArr = Array()
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    tempArr.push(callbackFn(this[i], i, this))
  }
  return tempArr
};
console.log("map :" + myArr.myMap(x => x * 2))

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// FILTER //
Array.prototype.myFilter = function (callbackFn) {
  let tempArr = Array()
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    if (callbackFn(this[i], i, this)) {
      tempArr.push(this[i])
    }
  }
  return tempArr
};
console.log("filter :" + words.myFilter(word => word.length > 6))
let array = [1, 3, 5]
const even = (element) => element % 2 === 0;
const odd = (element) => element % 2 !== 0;
// SOME //
Array.prototype.mySome = function (callbackFn) {
  let pass = false
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    if (callbackFn(this[i])) {
      pass = true
    }
  }
};
console.log("some :" + array.some(even));
// expected output: false
console.log("some :" + array.some(odd));
// expected output: true
const isBelowThreshold = (currentValue) => currentValue < 4;

const array1 = [1, , 39, 29, 10, 13];
// EVERY //
Array.prototype.myEvery = function (callbackFn) {
  let pass = true
  while (pass) {
    if (this[i] === undefined) continue;
    if (!callbackFn(this[i], i, this)) {
      pass = false
    }
  }
};
console.log("every :" + array1.every(isBelowThreshold));
// expected output: false
const ruduceArr = [1, 2, 3, 4];
// REDUCE //
Array.prototype.myReduce = function (callbackFn) {
  let temp = 0

  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    temp = callbackFn(temp, this[i], i, this)
  }
  return temp
};
const initialValue = 0;
const sumWithInitial = ruduceArr.myReduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log('reduce ' + sumWithInitial);
const includeArr = [1, 2, 21, 3];
// INCLUDES //
Array.prototype.myIncludes = function (searchElement) {
  let pass = false
  this.forEach(i => {
    if (this[i] === searchElement) {
      pass = true
      return pass
    }
  });
  return pass
};
console.log('my include ' + includeArr.myIncludes(21))

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// INDEXOF //
Array.prototype.myIndexOf = function (searchElement) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    if (this[i] === searchElement) {
      return i
    }
  }
};
console.log("indexof :" + beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log("indexof :" + beasts.indexOf('bison', 2));
// expected output: 4

console.log("indexof :" + beasts.indexOf('giraffe'));
// expected output: -1
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
// LASTINDEXOF //
Array.prototype.myLastIndexOf = function (searchElement) {
  for (let i = this.length - 1; i > 0; i++) {
    if (this[i] === undefined) continue;
    if (this[i] === searchElement) {
      return i
    }
  }
};
console.log("lastindexof :" + animals.lastIndexOf('Dodo'));
// expected output: 3

console.log("lastindexof :" + animals.lastIndexOf('Tiger'));
// expected output: 1
const myobject = { a: 1, b: 2, c: 3 };
// KEYS //
Object.myKeys = function (object) {
  let tempArr = Array()
  for (const i in object) {
    tempArr.push(i)
  }
  return tempArr
};
console.log(Object.myKeys(myobject));
// VALUES //
Object.myValues = function (object) {
  // Place your code here.
};