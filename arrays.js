var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ];
var array = new Array();

function addElementToBeginningOfArray(array, element) {
 return [element, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
 array = array.unshift(element);
 return array;
}
function addElementToEndOfArray(array, element) {
  return [...array, element];
}
function destructivelyAddElementToEndOfArray(array, element) {
  array = array.push(element);
  return array;
}
function accessElementInArray(array, index) {
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
}
function removeElementFromBeginningOfArray(array) {
  array.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
}
function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1);
}