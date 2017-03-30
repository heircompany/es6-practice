//======================================
// for loops = swiss army knife of array helpers
// dramatically less code than for loops
// almost anything can be reimplemented with for loops
// AVOID MUTATING DATA WHEREVER POSSIBLE!
// return a new array instead!
// DO NOT FORGET THE RETURN STATEMENT!!!
//======================================
var numbers = [10, 20, 30];
var sum = 0;

for(var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// reduce pipes one argument with another
numbers.reduce(function(sum, number) {
  return sum + number;
}, 0); // <-- can be any initial value

// more complicated examples

var primaryColors = [
  { colors: 'red' },
  { colors: 'blue' },
  { colors: 'yellow' },
];

primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color);
  return previous;
}, [] );

// common interview question - balanced parenthesis
// given a string of characters - write a function that decides whether the parenthesis balanced?
// balanced = 1 opening for every 1 closing
function balancedParens(string) {
  return !string.split(" ").reduce(function(previous, char) {
    if(previous < 0) { return previous; }
    if (char === "(" ) {return ++ previous;  }
    if (char === ")" ) {return -- previous;  }
    return previous;
  }, 0);
}

balancedParens('((((()))))()()()())()))))))((()()(())())())))())())))(())))))((()))');
