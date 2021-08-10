const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Man', 'Bro', 'Man', 'Dude'] for ['Guy', 'Man', 'Bro', 'Man', 'Dude']", () => {
    assert.deepEqual(tail(['Guy', 'Man', 'Bro', 'Man', 'Dude']), ['Man', 'Bro', 'Man', 'Dude']);
  }),

  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  }),

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  })
});

// tail(["Guy", "Man", "Bro", "Man", "Dude"]);
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// assertArraysEqual(tail(words), ["Lighthouse", "Labs"]);