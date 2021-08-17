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

const without = function(sourceArr, itemsToRemoveArr) {
  let resultArr = [];
  for (let i = 0; i < sourceArr.length; i++) {
    let addItem = true;
    for (let j = 0; j < itemsToRemoveArr.length; j++) {
      if (itemsToRemoveArr[j] === sourceArr[i]) {
        addItem = false;
      }
    }  
    if (addItem) {
      resultArr.push(sourceArr[i]);
    }
  }
  return resultArr;
};

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// const arr = ["1", "1", "1", "2", "3", "1" , "1"];
// console.log(without(arr, ["1"]));
// assertArraysEqual(arr, ["1", "1", "1", "2", "3", "1" , "1"]);

console.log(without(["1", "1", "1", "2", "3", "1" , "1"], ["1"])); // => ["2", "3"]
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", '2', "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([5, 4, 3], [5, 4, 3, 2]));

module.exports = without;