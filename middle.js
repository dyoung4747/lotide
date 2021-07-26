const assertArraysEqual = function(arr1, arr2) {
  let isTrue = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      isTrue = false;
    }
  }
  if (isTrue === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let isTrue = "";
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      isTrue = false;
    } else {
      isTrue = true;
    }
  }
  return isTrue;
};

const middle = function(array) {
  let midArr = [];
  for (let i = 0; i < array.length; i++) {
    if ((array.length / 2) <= 1) {
      midArr = [];
    } else if ((i === Math.floor(array.length / 2)) && (array.length % 2 === 0)) {
      midArr.push(array[i - 1], array[i]);
    } else if ((i === Math.floor(array.length / 2)) && (array.length % 2 !== 0)) {
      midArr.push(array[i]);
    }
  }
  return midArr;
};
  
  


console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
