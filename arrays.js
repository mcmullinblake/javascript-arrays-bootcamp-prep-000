var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

array = [];

function addElementToBeginningOfArray(array, element) {
  var array = new Array();
  [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}
