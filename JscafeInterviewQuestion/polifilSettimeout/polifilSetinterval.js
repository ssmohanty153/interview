import createSetTimeout from "./polifilSetTimeout.js";

function createInterval() {
  let intervalId = 0;
  let intervalMap = {};

  var { setTimeoutPolyfill, clearTimeoutPolifil } = createSetTimeout();

  function setTimeintervalPoly(callback, delay) {
    let newId = intervalId++;
    function reIterate() {
      intervalMap[newId] = setTimeoutPolyfill(function () {
        callback();
        console.log(intervalMap[newId]);
        if (intervalMap[newId]) {
          reIterate();
        }
      }, delay);
    }
    reIterate();
    return newId;
  }

  function clearIntervalPoly(id) {
    clearTimeoutPolifil(intervalMap[id]);
    delete intervalMap[id];
  }

  return { setTimeintervalPoly, clearIntervalPoly };
}
var { setTimeintervalPoly, clearIntervalPoly } = createInterval();
var count = 0;
var myId = setTimeintervalPoly(function () {
  console.log("set interval" + count);
  count++;
  if (count >= 5) {
    clearIntervalPoly(myId);
  }
}, 1000);
