//======================================
// for loops = swiss army knife of array helpers
// dramatically less code than for loops
// almost anything can be reimplemented with for loops
// AVOID MUTATING DATA WHEREVER POSSIBLE!
// return a new array instead!
// DO NOT FORGET THE RETURN STATEMENT!!!
//======================================
//great for individual/bulk tasks like "delete all emails"
var colors = ["red", "blue", "green"];

// for way
for (var i=0; i<colors.length; i++) {
  console.log(colors[i]);
}

// forEach way
// array helper passes in anonymous function, called one time for each object in the array
colors.forEach(function(color) {
  console.log(color);
});

// EXAMPLES
// #1
// create array of numbers
var numbers = [1,2,3,4,5];
// create variable to hold the sum
var sum = 0;
// loop over the array, incrementing sum variable
numbers.forEach(function(number) {
  sum += number;
});
// print sum variable
sum;

//#2
// create array of numbers
var numbers = [1,2,3,4,5];
// create variable to hold the sum
var sum = 0;

function adder(number) {
  sum+=number;
}
// loop over the array, incrementing sum variable
numbers.forEach(adder);
// print sum variable
sum;


//blogging example, relating comments to blog posts
var post = {id: 4, title: 'new post'};
var comments = [
  {postId: 4, content: 'awesome post'},
  {postId: 3, content: 'it was okay'},
  {postId: 4, content: 'neat'},
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id;
  });
}

commentsForPost(post, comments);
