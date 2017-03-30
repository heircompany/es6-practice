//======================================
// for loops = swiss army knife of array helpers
// dramatically less code than for loops
// almost anything can be reimplemented with for loops
// AVOID MUTATING DATA WHEREVER POSSIBLE!
// return a new array instead!
// DO NOT FORGET THE RETURN STATEMENT!!!
//======================================
// finding records in a list with a query
// for loop method
var users = [
  {name: 'jill'},
  {name: 'will'},
  {name: 'bill'},
];

var user;

for (var i = 0; i < users.length; i++) {
  if (users[i].name === 'will') {
    user = users[i];
  }
}

user;

// find won't go through entire list! stops when record is found
// only returns FIRST record - no duplicates allowed
users.find(function(user) {
  return user.name === 'will';
});

// more complex
function Car(model) {
  this.model = model;
}

var cars = [
  new Car('buick'),
  new Car('camaro'),
  new Car('focus'),
];

cars.find(function(car) {
  return car.model === 'focus';
});

// even more complex, find a singular element within another
var posts = [
  {id: 1, title: 'new post' },
  {id: 2, title: 'old post' }
];

var comment = { postId: 1, content: 'great post'};

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

postForComment(posts, comment);

// use case - finding users
