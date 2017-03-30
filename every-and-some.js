//======================================
// for loops = swiss army knife of array helpers
// dramatically less code than for loops
// almost anything can be reimplemented with for loops
// AVOID MUTATING DATA WHEREVER POSSIBLE!
// return a new array instead!
// DO NOT FORGET THE RETURN STATEMENT!!!
//======================================
var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32}
];

// CAN THESE COMPUTERS RUN A PROGRAM THAT REQUIRES 16GB RAM?
var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i=0; i<computers.length; i++) {
  var computer = computers[i];
  if( computer.ram < 16) {
    allComputersCanRunProgram = false;
  } else {
   onlySomeComputersCanRunProgram = true;
  }
}
"----------"
allComputersCanRunProgram;
onlySomeComputersCanRunProgram;

// AND OPERATOR
"++++++"
computers.every(function(computer) {
  return computer.ram > 16;
});
// RETURNS FALSE

// OR OPERATOR
computers.some(function(computer) {
  return computer.ram > 16;
});
// RETURNS TRUE

var names = [
  'alexandria',
  'matthew',
  'joe'
];

// RETURNS FALSE
names.every(function(name) {
  return name.length > 4;
});

// RETURNS TRUE
names.some(function(name) {
  return name.length > 4;
});

// EXAMPLE: SIGN UP FUNCTIONS
function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
}

var username = new Field("myUsername");
var password = new Field("myPassword");

var authFields = [username, password]

var authIsValid  = fields.every(function(field) {
  return.field.validate();
});
