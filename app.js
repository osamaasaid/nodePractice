var faker = require("faker");
// var fakeProduct = faker.commerce.productName();
// var fakePrice = faker.commerce.price();
console.log("Our inventory:");
 for(var i = 0; i <= 10; i++){
   console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
 }
