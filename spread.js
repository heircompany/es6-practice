const defaultColors = ["red", "green"];
const userFavoriteColors = ["orange", "yellow"];
const fallColors = ["fire red", "fall orange"];

// join together with concat method
defaultColors.concat(userFavoriteColors);

//use spread operator instead, easier to join new features easily
//also add in individual objects...
['blue', ...defaultColors, ...userFavoriteColors, ...fallColors ];

// messages
['userId', ...threads, ...friends, ...messages]
recap();

// using rest and spread in the same function
function validateShoppingList(...items) {
  if(items.indexOf('milk') <0 ) {
    return ['milk', ...items];
  }
  return items;
}
validateShoppingList('oranges', 'bread', 'eggs');

// fancy math open source calculations
const mathLibrary = {
  calculateProduct(a, b) {
    return a * b;
  }
};

// renaming this deployed function without breaking everyone using the code's apps
const mathLibrary = {
  calculateProduct(...rest) {
    console.log('please use the multiply method instead');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a*b;
  }
};
