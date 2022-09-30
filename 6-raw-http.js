const http = require("http");
const url =
  "http://api.weatherstack.com/current?access_key=889dc2e4942c6afeecc405a0b57b2787&query=18.5204,73.8567&units=f";

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
