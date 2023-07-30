const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  return arr.reduce((acc, current) => acc + current, 0);
};

const multiply = function (x, y, ...others) {
  return x * y * others.reduce((acc, current) => acc * current, 1);
};

const power = function (number, power) {
  let negativePower = false;
  let sum = number;
  if (power === 0) return 1;
  if (power < 0) {
    negativePower = true;
    power *= -1;
  }
  for (let index = 1; index < power; index++) {
    sum *= number;
  }
  if (negativePower) return 1 / sum;
  else return sum;
};

const factorial = function (n) {
  if (n === 0) return 1;
  let sum = 1;
  for (let i = 1; i < n + 1; i++) {
    sum *= i;
  }
  return sum;
};

const recursiveFactorial = function (n) {
  if (n === 0) return 1;
  return n * recursiveFactorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
