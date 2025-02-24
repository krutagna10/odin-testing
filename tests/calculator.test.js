import calculator from "../src/calculator";

test("adds two integers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("adds two floating-point numbers", () => {
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
})

test("subtracts two integers", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("multiplies two integers", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
})

test("divides two integers", () => {
  expect(calculator.divide(2, 1)).toBe(2);
})

test("handles divide by zero", () => {
  expect(calculator.divide(2, 0)).toBe(Infinity);
})