const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  } else if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  }
};

assertEqual("Oh hi", "Oh hi");
assertEqual("what", "where");
assertEqual(289, 289);
assertEqual(817, 22);