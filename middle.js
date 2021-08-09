const middle = function(array) {
  let midArr = [];
  for (let i = 0; i < array.length; i++) {
    if ((array.length / 2) <= 1) {
      midArr = [];
    } else if ((i === Math.floor(array.length / 2)) && (array.length % 2 === 0)) {
      midArr.push(array[i - 1], array[i]);
    } else if ((i === Math.floor(array.length / 2)) && (array.length % 2 !== 0)) {
      midArr.push(array[i]);
    }
  }
  return midArr;
};

module.exports = middle;