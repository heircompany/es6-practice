//======================================
// for loops = swiss army knife of array helpers
// dramatically less code than for loops
// almost anything can be reimplemented with for loops
// AVOID MUTATING DATA WHEREVER POSSIBLE!
// return a new array instead!
// DO NOT FORGET THE RETURN STATEMENT!!!
//======================================
// filtering arrays like products in a shopping cart
var products = [
  { name: 'cucumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'celery', type: 'vegetable' },
  { name: 'orange', type: 'fruit' },
];

// for loop example
var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filiteredProducts.push(products[i]);
  }
};

filteredProducts;

// filter helper can do it better!
// no need to use if statements to produce true/false
products.filter(function(product) {
  return product.type === 'fruit';
});

filteredProducts;

// more complex
var products = [
  { name: 'cucumber', type: 'vegetable', quantity: "0", price: "1" },
  { name: 'banana', type: 'fruit', quantity: "10", price: "15" },
  { name: 'celery', type: 'vegetable', quantity: "30", price: "9" },
  { name: 'orange', type: 'fruit', quantity: "3", price: "5" },
];

// type is vegetable, quantity > 0, price < 10
products.filter(function(product) {
  return product.type === 'vegetable'
  && product.quantity > 0
  && product.price <10
});

// returns celery!
