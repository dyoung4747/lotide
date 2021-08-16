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



const letterPositions = function(string) {
  let result = {};
  for (const index in string) {
    if (string[index] !== " ") {
      const letter = string[index];
      if (result[letter]) {
        result[letter].push(Number(index));
      } else {
        result[letter] = [Number(index)];
      }
    }
  }
  return result;
};



// let string = "hello";
// console.log(letterPositions(string));

// assertArraysEqual(letterPositions(string).h, [0]);
// assertArraysEqual(letterPositions(string).l, [2, 3]);

module.exports = letterPositions;