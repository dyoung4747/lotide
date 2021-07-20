const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};


const tail = function(array) {
  let tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  console.log(tailArray);
  return tailArray;
};

tail(["Guy", "Man", "Bro", "Man", "Dude"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
