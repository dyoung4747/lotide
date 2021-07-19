const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

let array = [];
const head = function(array) {
  return array[0];
};

assertEqual(head([]), 5);
assertEqual(head(["Helli", "Lighthouse", "Labs"]), "Hello");