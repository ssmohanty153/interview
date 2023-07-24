const flattenArray = (arr) => {
  let count = 1;
  return arr.reduce((prevValue, currentAarray) => {
    if (Array.isArray(currentAarray)) {
      prevValue = prevValue.concat(flattenArray(currentAarray));
    } else {
      prevValue.push(currentAarray);
    }
    return prevValue;
  }, []);
};

console.log(
  flattenArray([
    [[1, [1.1]], 2, 3],
    [4, 5],
  ])
);
