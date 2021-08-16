# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dyoung4747/lotide`

**Require it:**

`const _ = require('@udyoung4747/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: Determines if actual array equals the expected array.
* `assertEqual(actual, expected)`: Determines if actual value equals expected value.
* `assertObjectsEqual(actual, expected)`: Determines if actual object equals expected object.
* `countLetters(str)`: Takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly(arr, obj)`: Takes in a collection of items and return counts for a specific subset of those items.
* `eqArrays(arr1, arr2)`: Determines if two arrays are equal.
* `eqObjects(obj1, obj2)`: Determines two objects are equal.
* `findKey(obj, callback)`: Takes in an object and a callback. It scans the object and returns the first key for which the callback returns a truthy value.
* `findKeyByValue(obj, value)`: Searches for a key on an object where its value matches a given value.
* `flatten(arr)`: Given an array with other arrays nested inside, it will flatten the array into a single-level array.
* `head(arr)`: Takes in an array and returns the first element in the array.
* `letterPositions(str)`: Takes in a string and will return all the indices (zero-based positions) where each character is found.
* `map(arr, callback)`: Takes in an array and callback, and returns a new array based on the results of the callback function.
* `middle(arr)`: Takes in an array and returns the middle element if array length is an odd number, and middle two elements if array length is even.
* `tail(arr)`: Takes in an array and returns an array without the first element.
* `takeUntil(arr, callback)`: Takes in an array and callback, and returns a "slice of the array with elements taken from the beginning."
* `without(sourceArr, itemsToRemoveArr)`: This function takes in a source array and an itemsToRemove array and returns a new array with only those elements from source that are not present in the itemsToRemove array.

