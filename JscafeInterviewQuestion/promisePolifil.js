function PromisePolyfill(executer) {
  let onResolve,
    onReject,
    isFullfill = false,
    isReject = false,
    isCalled = false,
    value;

  function resolve(val) {
    isFullfill = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isReject = true;
    value = val;
    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }
  this.then = function (callback) {
    onResolve = callback;
    if (isFullfill && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    if (isReject && !isCalled) {
      isCalled = true;
      onReject(value);
    }
  };
  try {
    executer(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

PromisePolyfill.resolve = (val) => {
  new PromisePolyfill(function executer(resolve, reject) {
    resolve(val);
  });
};

PromisePolyfill.reject = (val) => {
  new PromisePolyfill(function execute(resolve, reject) {
    reject(val);
  });
};
const examplePromise = new PromisePolyfill((resolve, reject) => {
  setTimeout(() => {
    resolve("2");
  }, 2000);
});

examplePromise.then((res) => {
  console.log(res);
});
