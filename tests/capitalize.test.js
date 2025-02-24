import capitalize from "../src/captitalize";

test("handles empty string", () => {
  expect(capitalize("")).toBe("");
});

test("handles single letter string", () => {
  expect(capitalize("h")).toBe("H");
});

test("capitalizes first letter of a single word string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("does not change an already capitalized string", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test("capitalizes first letter of multiple word string", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("handles string where first letter is number", () => {
  expect(capitalize("12345")).toBe("12345");
})
