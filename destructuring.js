// destructuring objects
var expense = {
  type: "Business",
  amount: "$45 USD"
};

// es5
var type = expense.type;
var amount = expense.amount;

// es6
const { type } = expense; // declared variable type, set equal to expense.type
const { amount } = expense; // declared variable amount, set equal to expense.amount

const { type, amount } = expense;
// can only reference properties from an object that already exist

// example of destructuring an Object's arguments
var savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
};

// es5
function fileSummary(file) {
  return `the file ${file.name}.${file.extension} is of size ${file.size}`;
}

fileSummary(savedFile);

// es6
function fileSummary( { name, extension, size }, { color } ) {
  return `the ${color} file ${name}.${extension} is taking up ${size} space`;
}

fileSummary(savedFile, { color:'red' });

// desctructuring array properties
const companies = [
  'google',
  'facebook',
  'uber'
];

const [name, name2, name3] = companies;
// when array ends, will throw undefined if you attempt to call next proprety
// use with rest!
const [ name, ...rest ] = companies;

// destructuring array elements
const { length } = companies;

// get access to an object's element within an array
const companies = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' }
];

// es5
var location = companies[0].location;
location;

// es6
// reach in to array for nested object properties
const [{ location }] = companies;
location; // returns Google

// more nested
const Google = {
  locations: ['Mountain View', 'New York', 'London']
};

const { locations: [ location ] } = Google;
location; // returns Mountain View

// example of using object destructuring
function signUp(username, password, email, dateOfBirth, city) {
  //create new user
}
// other code
// more code
// lots of code
// endless code
// pounds and pounds of code
// code code code
// what about code
// fuck a code
// oh btw, code
// sup code
// still moar code
signUp('myname', 'mypassword', 'myemail@gmail.com', '11-19-1990', 'new york');
// other code
// more code
// lots of code
// endless code
// pounds and pounds of code
// code code code
// what about code
// fuck a code
// oh btw, code
// sup code
// still moar code
//instead.... use a damn object pleb
const user = {
  username: 'myname',
  password: 'mypassword',
  email: 'myemail@gmail.com',
  dateOfBirth: '11-19-1990',
  city: 'new york'
}
signUp(user);

// create new user, who cares about the order as long as you destructure
signUp({ username, password, email, dateOfBirth, city });
signUp({ password, city, email, username, dateOfBirth });
// both work

// example of array destructuring
const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];

// need to transform structure
[
  { x: 4, y: 5 },
  { x: 10, y: 1 },
  { x: 0, y: 40 }
];

//es5 = for loop to push each array in to an object
//es6 is much easier with destructuring
points.map(([ x, y ]) => {
  return { x , y };
});
