function createBookShop(inventory) {
  return {
    // inventory: inventory,
    inventory,
    // inventoryValue: function() {
    //   return this.inventory.reduce((total, book) => total + book.price, 0);
    // },
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    // priceForTitle: function(title) {
    //   return this.inventory.find(book => title === book.title);
    // }
    priceForTitle(title) {
      return this.inventory.find(book => title === book.title);
    }
  };
}

const inventory = [
  { title: "Book 1", price: 10 },
  { title: "Book 2", price: 8 }
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle("Book 1"));
