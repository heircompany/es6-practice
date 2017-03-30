var color = 'red';
color;
// don't use it ever again in ES6
//use these instead
//const cannot change, will throw error
const keyword = expectedValueIsConstant
//let will change, don't need to use var later when doing so
let keywords = expectedValueIsVariable

// ES6 example: employees
var name = 'jane';
var title = 'software engineer';
var hourlyWage = 40;
// change to
const name = 'jane';  //employee probably wont change their name
let title = "software engineer";  //employee may change titles someday
let hourlyWage = 40;
// some time later...
// name can't change, will throw error because it's CONST not LET
title = 'senior software engineer'
hourlyWage = 50;

// ES6 example: counting vowels in a string
// not es6
function count(targetString) {
  var characters = ['a', 'e', 'i', 'o', 'u'];
  var number = 0;

  for (var i = 0; i < targetString; i++) {
    if(characters.includes(targetString[i])) {
      number++;
    }
  }
  return number;
}

count('aeiobzxceiaipbiox');

//es6
// ES6 example: counting vowels in a string
// not es6
function count(targetString) {
  const characters = ['a', 'e', 'i', 'o', 'u'];
  let number = 0;

  for (var i = 0; i < targetString; i++) {
    if(characters.includes(targetString[i])) {
      number++;
    }
  }
  return number;
}

count('aeiobzxceiaipbiox');
