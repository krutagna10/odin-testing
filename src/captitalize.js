function capitalize(str) {
  if (str.length === 0) {
    return str;
  }

  const uppercasedLetter = str[0].toUpperCase();
  return uppercasedLetter + str.slice(1);
}

export default capitalize;
