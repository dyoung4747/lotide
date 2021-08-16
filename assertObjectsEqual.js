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

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  
  for (const key of object1Keys) {
    if ((Array.isArray(object1[key]) === true) && (Array.isArray(object2[key]) === true)) {
      let result = eqArrays(object1[key], object2[key])
      if (result !== true) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;    
    }
  }
    return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//   const cd = { c: "1", d: ["2", 3] };
//   const dc = { d: ["2", 3, 4], c: "1" };
// console.log(assertObjectsEqual(cd, dc)); 
  
//   const cd2 = { c: "1", d: ["2", 3] };
// console.log(assertObjectsEqual(cd, cd2));

module.exports = assertObjectsEqual;