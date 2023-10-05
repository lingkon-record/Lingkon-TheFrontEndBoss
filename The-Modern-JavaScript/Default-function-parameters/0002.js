function calculateTotal(price, taxRate = 0.1, discount = 0) {
  return price * (1 + taxRate) - discount;
}

console.log(calculateTotal(100)); // Outputs: 110
console.log(calculateTotal(100, 0.15)); // Outputs: 115
console.log(calculateTotal(100, 0.15, 10)); // Outputs: 105
