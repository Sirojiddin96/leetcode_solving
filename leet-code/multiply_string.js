/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  const total = num1* num2

  console.log((num1*1)*(num2*1));
  return total.toString()
};

const response = multiply(123456789, 987654321); // "6"

console.log(response);