import calculator from "../src/calculator";

test("adds positive numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("adds negative numbers", () => {
  expect(calculator.add(-1, -2)).toBe(-3);
})

test("adds floating-point numbers", () => {
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
})

test("subtracts numbers", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("subtracts negative numbers", () => {
  expect(calculator.subtract(-1, -2)).toBe(1);
})

test("multiplies numbers", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
})

test("divides numbers", () => {
  expect(calculator.divide(2, 1)).toBe(2);
})

test("handles divide by zero", () => {
  expect(calculator.divide(2, 0)).toBe(Infinity);
})