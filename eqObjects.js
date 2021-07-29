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
  

  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); 
  
  const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2));


  
