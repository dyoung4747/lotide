const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  isTrue = "";
  for (let i = 0; i < arr1.length; i++) {
    //for (let j = 0; j < arr2.length; j++) {
    //arr1 += arr1[i]
    //console.log(arr1[i])
    //console.log(arr2[j])
    if (arr1[i] !== arr2[i]) {
      isTrue = false;
    } else {
      isTrue = true;
    }
  }
  return isTrue;
};

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]))
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))

assertEqual(eqArrays([1, 2, 0], [1, 2, 0]), true);
