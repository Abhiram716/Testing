const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * Factorial(n - 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

module.exports = {
  add,
  subtract,
  power,
  factorial,
};
