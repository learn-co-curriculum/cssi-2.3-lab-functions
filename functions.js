// Here's where you can define your functions!

// 1. A Bit Nervous
// Create a function that adds "...I think" to strings
// "Functions are lists of instructions" becomes "Functions are lists of instructions...I think"
function hedge(statement) {
  // write your code here!
}

// Does it work?
console.log(hedge("Functions are lists of instructions"));
console.log(hedge("Functions can take multiple inputs but only return a single output"));

// 2. Today I learned
// Create a function that adds "Today I learned " before string statements
// "Functions can take multiple inputs but only return a single output" becomes "Today I learned Functions can take multiple inputs but only return a single output"
function til(lesson) {

}
// Does it work?
console.log(til("Functions can take multiple inputs, but only return a single output"));
console.log(til("Variables are like boxes where I can put some data"));

// 3. Sales Tax Checkout
// Remember the checkout function?
// Well, with the new 9.5% Seattle sales tax, we need to write a new checkout
// function so our cashier doesn't have to calculate all that on their own.
// We  want to be able to use the value in other calculations, so don't forget to return the value, not just print it out.
// Add the 9.5% tax to the checkout function.
function checkout(item1, item2, coupon) {
  var subtotal = item1 + item2;
  var total = subtotal - subtotal * coupon;
  return total;
}
// Does it work?
console.log("Buying bananas and ice cream for a smoothie!");
var bananas = 3.50;
var iceCream = 5.25;
var coupon = 0.1;
console.log(checkout(bananas, iceCream, coupon));
console.log("Buying a computer and a textbook - on sale!")
var raspberryPi = 29.95;
var nandToTetris = 24.88;
var sale = .5; // what a sale! 50%!
console.log(checkout(raspberryPi, nandToTetris, sale));
