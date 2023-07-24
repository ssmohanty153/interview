/**
 * 

const sum = () => {
  let prevSum = 0;
  console.log(prevSum, "l;l;;l;l;");
  return (newSum = 0) => {
    prevSum += newSum;
    return prevSum;
  };
};

const sumXCurr = sum();

console.log(sumXCurr(1));

console.log(sumXCurr(3));
 * @returns 
 * 
 */


const addInfanite = (a) => {
  return (b) => {
    if (b) return addInfanite(a + b);
    return a;
  };
};

console.log(addInfanite(1)(2)());


const curry = f => {
  const nargs = f.length;
  const vargs = [];
  const curried = (...args) => vargs.push(...args) >= nargs
    ? f(...vargs.slice(0, nargs))
    : curried;

  return curried;
};


const fn2 = curry((a, b) => a + b);
const fn3 = curry((a, b, c) => a * (b + c));
const fn4 = curry((a, b, c, d) => Math.pow(a, b * (c + d)));

console.log(fn2(1)(2)); // 1 + 2
console.log(fn3(2)(3)(4)); // 2 * (3 + 4)
console.log(fn4(2)(1, 3)(4)); // 2 ^ (1 * (3 + 4))