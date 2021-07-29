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

assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);

