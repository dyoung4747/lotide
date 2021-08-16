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

const flatten = function(array) {
  let flatArr = [];
  for (const row of array) { 
    if (Array.isArray(row)) {
      for (const col of row) {
        flatArr.push(col)
      } 
    } else {
      flatArr.push(row)
          
    }
  }
  return flatArr;
};
  
// console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;