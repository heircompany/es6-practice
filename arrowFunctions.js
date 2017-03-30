//fat arrows can replace the word function hundreds of times
const add = function(a, b) {
  return a + b;
}
add(1, 2);

//implicit return of funtion, can remove delimiters
//expression has to be ONE LINE
const add = (a, b) => a + b
add(1, 2);

//for more complex functions with MULTIPLE LINES
const add = (c, d) => {
  return c + d;
}
add(3, 4);

//when to use 1
const double = function(number) {
  return 2 * number;
}
double(8);
//change --> can omit parenthesis with SINGLE ARGUMENTS or EMPTY PARENTHESIS
const double = number => 2 * number
double(16);

//when to use 2
const numbers = [1,2,3];

numbers.map(function(number) {
  return 2* number;
});
// change --> USE ONLY ONE PARENTHESIS
numbers.map(number => 2 * number);

//biggest reason - holding the value of THIS
const team = {
  members: [`jane`, `bill`],
  teamName: `super squad`,
  teamSummary: function() {
    return this.members.map(function(member) {
      return `${member} is on team ${this.teamName}!`
    });
  }
};
team.teamSummary();
//THIS is undefined instead of the value we want: this team
//fat arrow functions hold the context of THIS as the value throughout our object/function
const team = {
  members: [`jane`, `bill`],
  teamName: `super squad`,
  teamSummary: function() {
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}!`
    });
  }
};
team.teamSummary();
