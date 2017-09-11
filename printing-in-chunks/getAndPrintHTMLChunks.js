const https = require("https");

function getAndPrintHTMLChunks() {
  var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step1.html"
  };

  'https://' + requestOptions.host + requestOptions.path

  https.get(`https://${requestOptions.host}${requestOptions.path}`, res => {
    res.setEncoding("utf8");

    res.on("data", chunk => {
      console.log(`${chunk}\n`);
    });
  });
}

getAndPrintHTMLChunks();
