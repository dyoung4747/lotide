const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual([1, "2", 3, "blue", true], [1, "2", 3, "blue", true]);