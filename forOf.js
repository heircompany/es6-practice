// iterate through arrays of data
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
  console.log(color);
}
// logs red, green, blue

//numbers work too
const numbers = [1,2,3,4];
let total = 0;
for (let number of numbers) {
  total += number;
}

//still better to use forEach and reduce....
// EXCEPT FOR GENERATORS (MOTHERLOAD OF ES6)

//what is a generator - function that can be entered and exited many times
//what does a generator do
// or function *numbers() to create generator function
function* shopping() {
//stuff happening while walking to store on sidewalk
//walking down sidewalk
//go in to store with cash
// yield keyword marks a TRANSITION
const stuffFromStore =  yield `cash`; // <-- we walked in with cash
//walking to laundry place
// yield keyword marks a TRANSITION
const cleanClothes = yield `laundry`;  //<-- we walked out with laundry
// walking back home
return [stuffFromStore, cleanClothes];
}
//stuff happening while in the store
const gen = shopping();  // <-- nothing happens when shopping() is called like this
// next keyword calls function shopping()
gen.next();  // leaving our house, has a value of `cash`
// walked in store
// walking up and down the aisles
// purchase stuff from store
gen.next(`groceries`);  // leaving the store with groceries, has a value of `groceries`
gen.next(`clean clothes`);
//iteration with generators
function* colors() {
  yield `red`;
  yield `blue`;
  yield `green`;
}

// const gen = colors();
// gen.next(); // <-- outputs value:red done:false
// gen.next(); // <-- outputs value:blue done:false
// gen.next(); // <-- outputs value:green done:false
// gen.next(); // <-- outputs done:true

// USE FOR OF LOOPS
// CANNOT USE ARRAY HELPERS!!!!
const myColors = [];
for(let color of colors()) {
  myColors.push(color);
}
myColors;

//generator delegation - walk through several layers of generator iterations
const testingTeam = {
  lead: `amanda`,
  tester: `bill`
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: `engineering`,
  lead: `jill`,
  manager: `alex`,
  engineer: `dave`,
};

function* teamIterator(team) {
  // yield team.testingTeam.lead;
  // yield team.testingTeam.tester;
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  const testingTeamGenerator = testingTeamIterator(team.testingTeam);
  yield* testingTeamGenerator; // <-- in a generator + another generator that has yields
  // for of loop falls through to testingTeamIterator
}

function* testingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

const names = [];
for(let name of teamIterator(engineeringTeam)) {
  names.push(name);
}
names;
// outputs amanda, bill, jill, alex, dave

// Symbol.iterators - tool that teaches objects how to respond to for of loops
const testingTeam = {
  lead: `amanda`,
  tester: `bill`,
  // key interpolation is valid in es6!
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: `engineering`,
  lead: `jill`,
  manager: `alex`,
  engineer: `dave`,
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

const names = [];
for(let name of engineeringTeam) {
  names.push(name);
}
names;
// outputs amanda, bill, jill, alex, dave
