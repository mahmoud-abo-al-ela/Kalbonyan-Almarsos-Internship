function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomNumber(1, 10));

function product(strings, productName, productPrice) {
  return `${strings[0]}${productName}${strings[1]}${productPrice}`;
}

const prodName = "javaScript";
const prodPrice = "20.99$";

const prodOutput = product`this product ${prodName} is ${prodPrice}`;
console.log(prodOutput);
