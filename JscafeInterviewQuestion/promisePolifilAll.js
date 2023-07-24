/**
 * 
Promise.all Polyfill
Promise.all takes an array of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.

Here again we create our own executor function, and return back our promise object which would take in this executor.

We create an array named fulfilledPromises and push values to it whenever any promise is resolved.
If all promises are resolved ( fulfilledPromises.length === promises.length ) we invoke resolve .
If any promise is rejected we invoke the reject
 * 
 * 
 */

function like(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`like this video ${video}`);
    }, 2000);
  });
}

function dislike(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`dislike this video ${video}`);
    }, 1000);
  });
}

function share(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share this video ${video}`);
    }, 1000);
  });
}

Promise.allPolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    if (!promises.length) {
      resolve(results);
      return;
    }

    let pending = promises.length;
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((res) => {
        results[index] = res;
        pending--;
        if (pending === 0) {
          resolve(results);
        }
      }, reject);
    });
  });
};

Promise.allPolyfill([
  like("knowledge Express"),
  dislike("knowledge Express"),
  share("knowledge Express"),
]).then((res) => {
  console.log(res);
});
