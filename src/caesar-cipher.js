function isAlphabet(letter) {
  const charCode = letter.charCodeAt(0);
  const isLowerCase =
    charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0);
  const isUpperCase =
    charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0);
  return isLowerCase || isUpperCase;
}

function calculateSubstitutedLetters(key) {
  const originalLetters = [];
  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    originalLetters.push(String.fromCharCode(i));
  }
  
  const substitutedLetters = new Map();
  for (let i = 0; i < originalLetters.length; i++) {
   const index = (i + key) % originalLetters.length;
   const originalLetter = originalLetters[i];
   const substitutedLetter = originalLetters[index];
   substitutedLetters.set(originalLetter, substitutedLetter);
   substitutedLetters.set(originalLetter.toUpperCase(), substitutedLetter.toUpperCase());
  }

  return substitutedLetters;
}


function caesarCipher(plainText, key) {
  if (plainText === "") {
    return "";
  }

  const substitutedLetters = calculateSubstitutedLetters(key);
  let cipherText = "";
  for (const plainTextLetter of plainText) {
    if (!isAlphabet(plainTextLetter)) {
      cipherText += plainTextLetter;
      continue;
    }

    const cipherTextLetter = substitutedLetters.get(plainTextLetter);
    cipherText += cipherTextLetter;
  }

  return cipherText;
}


export default caesarCipher;
