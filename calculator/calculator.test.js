const calculator = require("./calculator");

test("adds 0 and 0", () => {
  expect(calculator.add(0, 0)).toBe(0);
});

test("adds 2 and 2", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("adds positive numbers", () => {
  expect(calculator.add(2, 6)).toBe(8);
});

test('adds 0 and 0', () => {
    expect(calculator.add(0,0)).toBe(0);
});

test.skip('subtracts numbers', () => {
  expect(calculator.subtract(10,4)).toBe(6);
});

test.skip('computes the factorial of 1', () => {
  expect(calculator.factorial(1)).toBe(1);
});

test.skip('computes the factorial of 2', () => {
  expect(calculator.factorial(2)).toBe(2);
});

test.skip('computes the factorial of 5', () => {
  expect(calculator.factorial(5)).toBe(120);
});

test.skip('raises one number to the power of another number', () => {
  expect(calculator.power(4,3)).toBe(64); // 4 to third power is 64
});