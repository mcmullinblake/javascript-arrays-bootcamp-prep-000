var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var array = [];
  [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = [];
  array.push(element);
  return array
}
