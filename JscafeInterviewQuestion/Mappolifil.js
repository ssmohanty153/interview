Array.prototype.myMap = function (callbackfn) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(callbackfn(this[i], i, this));
  }
  return arr;
};

// const array1 = [1, 4, 9, 16];

// const map1 = array1.myMap((x) => x * 2);

// console.log(map1);

Array.prototype.myFilter = function (callbackfn) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callbackfn.call(this, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

// const kvArray = [
//     { key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 },
//   ];

//   const reformattedArray = kvArray.myMap(({ key, value }) => ({ [key]: value }));

//   console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
//   console.log(kvArray);

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// const result = words.myFilter((word) => word.length > 6);

// console.log(result);

Array.prototype.myReducer = function (callback, initialValue) {
  var acculater = initialValue;

  for (var i = 0; i < this.length; i++) {
    if (acculater !== undefined) {
      acculater = callback.call(undefined, acculater, this[i], i, this);
    } else {
      acculater = this[i];
    }
  }
  return acculater;
};

const array2 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array2.myReducer(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
