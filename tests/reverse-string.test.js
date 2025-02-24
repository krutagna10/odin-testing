import reverseString from "../src/reverse-string";

test("handles empty string", () => {
  expect(reverseString("")).toBe("");
});

test("one letter string remains same", () => {
  expect(reverseString("h")).toBe("h");
});

test("reverses string with single word", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverses string with multiple words", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("reverses string with numbers", () => {
  expect(reverseString("12345")).toBe("54321");
});


