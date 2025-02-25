function isAlphabet(letter) {
  return /[a-zA-Z]/.test(letter);
}

function shiftLetter(letter, key) {
  const alphabet =
    letter === letter.toLowerCase()
      ? "abcdefghijklmnopqrstuvwxyz"
      : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const index = alphabet.indexOf(letter);
  return alphabet[(index + key) % 26];
}

function caesarCipher(plainText, key) {
  if (plainText === "") {
    return "";
  }

  if (key < 0) {
    throw new Error("Key cannot be negative");
  }

  let cipherText = "";
  for (const letter of plainText) {
    cipherText += isAlphabet(letter) ? shiftLetter(letter, key) : letter;
  }

  return cipherText;
}

export default caesarCipher;
