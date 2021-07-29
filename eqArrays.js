const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

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

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]))
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))

assertEqual(eqArrays([1, 2, 0], [1, 2, 0]), true);
console.log(eqArrays([4, "2", "3"], ["1", "2", "3"]))