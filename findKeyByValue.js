const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  const keys = Object.entries(obj);
  for (let i = 0; i < keys.length; i++) {
    let val = keys[i][1];
    let key = keys[i][0];
    if (value === val) {
      return key;
    }
  }
};


// const musicByGenre = {
//   rap: "Drake",
//   rock: "Emery",
//   idm: "Rival Consoles"
// };

// console.log(findKeyByValue(musicByGenre, "Las Von"));

// assertEqual(findKeyByValue(musicByGenre, "Drake"), "rap");
// assertEqual(findKeyByValue(musicByGenre, "Emery"), "rock");
// assertEqual(findKeyByValue(musicByGenre, "Rival Consoles"), "idm");

module.exports = findKeyByValue;