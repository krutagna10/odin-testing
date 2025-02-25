import caesarCipher from "../src/caesar-cipher";

test("shifts text correctly according to key", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("shifted text preserves lettercasing", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("handles empty string", () => {
  expect(caesarCipher("", 3)).toBe("");
})

test("handles punctuation, spaces and and other non-alphabetial characters", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("throws error on negative key", () => {
  expect(caesarCipher("Hello, World", -1))
})
