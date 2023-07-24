function createSetTimeout() {
  var timerId = 1;
  let timerMap = {};
  function setTimeoutPolyfill(callback, delay, ...args) {
    var id = timerId++;

    timerMap[id] = true;

    let startTime = Date.now();

    function triggerCallback() {
      if (!timerMap[id]) {
        return;
      }

      if (Date.now() > startTime + delay) {
        callback.apply(this, args);
      } else {
        requestIdleCallback(triggerCallback);
      }
    }
    requestIdleCallback(triggerCallback);
    return id;
  }

  function clearTimeoutPolifil(id) {
    console.log(";lq;lkqkk");
    console.log(timerMap, "timerMap");
    delete timerMap[id];
  }
  return { setTimeoutPolyfill, clearTimeoutPolifil };
}

var { setTimeoutPolyfill, clearTimeoutPolifil } = createSetTimeout();

console.log("Start");

var myId = setTimeoutPolyfill(
  function (name) {
    console.log(`My naame is ${name}`);
  },
  1000,
  "subhransu"
);
clearTimeoutPolifil(myId);

console.log("end");

export default createSetTimeout;
