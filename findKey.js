const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKey = function(obj, callback) {
  const keys = Object.entries(obj);
  for (let i = 0; i < keys.length; i++) {
    let val = keys[i][1];
    let key = keys[i][0];
    if (callback(val)) {
      return key;
    }
  }
};

const stars = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

console.log(findKey(stars, x => x.stars === 3));

// TEST

const musicByGenre = {
  "rap": { artist: "Drake" },
  "rock": { artist: "Emery"},
  "idm": {artist: "Rival Consoles"}
};

console.log(findKey(musicByGenre, x => x.artist === "Rival Consoles"));

console.log(assertEqual(findKey(musicByGenre, x => x.artist === "Rival Consoles"), "idm"));
console.log(assertEqual(findKey(stars, x => x.stars === 3), "Akaleri"));
console.log(assertEqual(findKey(musicByGenre, x => x.artist === "Emery"), "rock"));
