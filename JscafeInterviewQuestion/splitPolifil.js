const poliFillSplit = (string, delimeter) => {
  const res = [];
  if (delimeter === "") {
    return Array.from(string);
  }
  const startSplit = (str, i) => {
    if (i >= str.length) {
      return;
    }
    const index = str.indexOf(delimeter);
    if (index >= 0) {
      res.push(str.substring(0, index));

      startSplit(
        str.substring(index + delimeter.length),
        index + delimeter.length
      );
    } else {
      res.push(str);
    }
  };

  startSplit(string, 0);
  return res;
};

console.log(poliFillSplit("Subhransu sekhar mohanty", " "));
