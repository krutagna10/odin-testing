function reverseString(str) {
  const letters = str.split("");
  let start = 0;
  let end = letters.length - 1;

  while (start < end) {
    const tempLetter = letters[start];
    letters[start] = letters[end];
    letters[end] = tempLetter;
    start++;
    end--;
  }

  return letters.join("");
}

export default reverseString;
