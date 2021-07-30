const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  isTrue = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      isTrue = false;
    }
  }
  return isTrue;
};

const assertArraysEqual = function(arr1, arr2) {
  let isTrue = true;
  if (arr1.length !== arr2.length) {
    isTrue = false;
  }
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

const takeUntil = function(array, callback) {
  let resultArr = [];
  for (const el of array) {
    if (!callback(el)) {
      resultArr.push(el)
    } else if (callback(el)) {
      break;
    }
  }
  return resultArr;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

const data3 = ["bug", "45", "🍫", "gave", 22, "joke", 24];
const results3 = takeUntil(data3, x => typeof x === "number");

// TEST

console.log(assertArraysEqual(results1,  [1, 2, 5, 7, 2]));
console.log(assertArraysEqual(results2,  ["I've", "been", "to", "Hollywood"]));
console.log(assertArraysEqual(results3,  ["bug", "45", "🍫", "gave"]));