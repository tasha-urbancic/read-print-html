const getHTML = require('../http-functions');

function printUpperCase(html) {
  console.log(html.toUpperCase());
}

const requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/module-version/uppercase.html"
};

getHTML(requestOptions, printUpperCase);