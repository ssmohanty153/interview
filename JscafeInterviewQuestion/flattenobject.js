function fluttenObj(obj, parent) {
  const finalObj = {};
  const generateFlatObject = (obj, parent) => {
    for (let key in obj) {
      const newKey = parent + key;
      const value = obj[key];
      if (typeof value === "object") {
        generateFlatObject(value, newKey + ".");
      } else {
        finalObj[newKey] = value;
      }
    }
  };
  generateFlatObject(obj, parent);
  return finalObj;
}

const obj = {
  A: "12",
  B: "13",
  C: {
    P: 14,
    Q: 15,
    O: {
      L: 16,
    },
    Q: [1, 2, 3],
  },
};

console.log(fluttenObj(obj, ""));
