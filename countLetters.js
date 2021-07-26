const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(string) {
  let result = {};
  for (const letters of string) {
    if ( letters !== " ") {
      if (result[letters]) {
        result[letters] += 1;
      } else {
        result[letters] = 1;
      }
    }
  }
  console.log(result);
  return result;
};

const string = "Oh hello there";

const result1 = countLetters(string);

assertEqual(result1["h"], 2);
assertEqual(result1["b"], undefined);
assertEqual(result1["e"], 3);
assertEqual(result1["Agouhanna"], undefined);