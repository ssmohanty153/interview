/**
 * Memozization
 */

const memoization = (fn) => {
  const cache = {};
  return (...args) => {
    const argToString = JSON.stringify(args);
    if (argToString in cache) {
      console.log(`fetching from cache for afgs ${argToString}`);
      return cache[argToString];
    } else {
      console.log(`Compution value from auguments ${argToString}`);
      const result = fn.apply(this, args);
      cache[argToString] = result;
      return result;
    }
  };
};

const addThreeNum = (a, b, c) => a + b + c;

const factorial = (x) => {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
};

const add = memoization(addThreeNum);

const fact = memoization(factorial);

const fact2 = memoization((x) => {
  if (x === 0) {
    return 1;
  } else {
    return x * fact2(x - 1);
  }
});

console.time();
console.log(add(1, 2, 3));
console.timeEnd();
console.time();

console.log(fact(5));
console.timeEnd();
console.time();
console.log(fact2(5));
console.timeEnd();
console.time();
console.log(fact2(6));
console.timeEnd();
