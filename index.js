// jshint esversion: 6


function sumItems(array) {
  if (Array.isArray(array)) {
    return array.reduce((num, sum) => num + sumItems(sum), 0);
  }
  return array;
}

module.exports = sumItems;


// .reduce((a, b) => a + b, 0)
