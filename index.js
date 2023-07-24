function getData() {
  // Retrieve data from a remote server
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data retrieved from the server";
      if (true) {
        resolve([null, data]);
      } else {
        reject("somethings happend");
      }
      // callback(null, data);
    }, 1000);
  });
}
function handleResult(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
}

const data = (err, data) => {
  console.log(err, data);
  handleResult(err, data);
};
const timeout = 500;
setTimeout(() => {
  getData().then(([err, data1]) => {
    console.log("err",err);
    data(err, data1);
  });
}, timeout);

// const pr = new Promise((resolve, reject) => {
//   if (resolve) {
//     console.log("resolve");
//   } else {
//     console.log("reject");
//   }
// });
// pr.then();

// function getData() {
//   // Retrieve data from a remote server
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = "Data retrieved from the server";
//       // callback(null, data);
//       let error = false;
//       if (!error) {
//         resolve([null, data]);
//       } else {
//         reject("nothing is working fine");
//       }
//     }, 1000);
//   });
// }
// function handleResult(err, data) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data);
//   }
// }
// const timeout = 500;
// setTimeout(() => {
//   getData().then((res1) => {
//     console.log(res1);
//     handleResult(res1[0],res1[1]);
//   });
// }, timeout);
