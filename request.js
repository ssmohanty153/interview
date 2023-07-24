const http = require("http");

const options = {
  hostname: "www.example.com",
  port: 80,
  path: "/some/path",
  method: "GET",
};

const req = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  res.on("data", (data) => {
    console.log(`Response Body: ${data}`);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();
