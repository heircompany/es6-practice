// function createBookShop(inventory) {
//   return {
//     inventory: inventory,
//     inventoryValue: function() {
//       //calc inventory - iterate over inventory, add up price
//       return this.inventory.reduce((total, book) => total + book.price, 0);
//     )
//     },
//     priceForTitle: function(title) {
//       //find book by title
//       return this.inventory.find(book => book.title === title).price;
//     }
//   };
// }
//
// // books in inventory array
// const inventory = [
//   { title: "harry potter", price: 10 },
//   { title: "eloquent javascript", price: 15 },
// ];
//
// const bookShop = createBookShop(inventory);
//
// bookShop.inventoryValue();   // $25
// bookShop.priceForTitle("harry potter"); // $10

// enhanced object literals
function createBookShop(inventory) {
  return {
    // when key and value are matching names, you can just state it once
    inventory,
    // removing the word "function"
    inventoryValue() {
      //calc inventory - iterate over inventory, add up price
      return this.inventory.reduce((total, book) => total + book.price, 0);
    )
    },
    // removing the word "function"
    priceForTitle(title) {
      //find book by title
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

// books in inventory array
const inventory = [
  { title: "harry potter", price: 10 },
  { title: "eloquent javascript", price: 15 },
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();   // $25
bookShop.priceForTitle("harry potter"); // $10

// using jQuery to make an HTTP request to some endpoint
function saveFile(url, data) {
  //$.ajax({method: "POST", url: url, data: data });
  $.ajax({
    url,
    data,
    method: "POST"
  });
}

const url = "http://fileupload.com"
const data = {color: "red"};

saveFile(url, data);
