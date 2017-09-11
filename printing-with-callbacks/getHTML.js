//This function should use a buffering technique
//  to append each chunk of data to a variable as
//  it is received, and then console.log the data once
//  all of the data has been received.

const https = require("https");

function printHTML(html) {
  console.log(html);
}

function getHTML(options, CB) {
  https.get(`https://${options.host}${options.path}`, res => {
    res.setEncoding("utf8");

    let rawData = "";
    res.on("data", chunk => {
      rawData += chunk;
    });

    res.on("end", () => {
      CB(rawData);
    });
  });
}

const requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step4.html"
};

getHTML(requestOptions, printHTML);
