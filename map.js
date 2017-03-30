//======================================
// for loops = swiss army knife of array helpers
// dramatically less code than for loops
// almost anything can be reimplemented with for loops
// AVOID MUTATING DATA WHEREVER POSSIBLE!
// return a new array instead!
// DO NOT FORGET THE RETURN STATEMENT!!!
//======================================
// map = most widely used array helper
var numbers = [1,2,3];
var doubledNumbers = [];

// using for loops to pass data from one array to another
for (var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}
doubledNumbers;

// another for loop that mutates the array
for (var i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] *2;
}
doubledNumbers;

// map is better!
var doubled = numbers.map(function(number) {
  return number *2;
});

doubled;
doubledNumbers;

// good for "plucking" data
var cars = [
  {model: "buick", price: "cheap"},
  {model: "camaro", price: "expensive"},
]

var prices = cars.map(function(car) {
  return car.price;
});

prices;

// use in front end web dev, like friend updates
// rendering lists of data = primary goal of most apps
