const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

tail(["Guy", "Man", "Bro", "Man", "Dude"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

assertArraysEqual(tail(words), ["Lighthouse", "Labs"]);