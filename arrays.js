var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var array = [];

function addElementToBeginningOfArray(array, element) {
  [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.push(element);
  return array
}
