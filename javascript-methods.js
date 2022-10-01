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
console.log(myArr.myMap(x => x * 2))
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
console.log(words.myFilter(word => word.length > 6))

// SOME //
Array.prototype.mySome = function (callbackFn) {
  // Place your code here.
};

// EVERY //
Array.prototype.myEvery = function (callbackFn) {
  // Place your code here.
};

// REDUCE //
Array.prototype.myReduce = function (callbackFn) {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function (searchElement) {
  // Place your code here.
};
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// INDEXOF //
Array.prototype.myIndexOf = function (searchElement) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === searchElement) {
      return i
    }
  }
};
console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function (searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function (object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function (object) {
  // Place your code here.
};