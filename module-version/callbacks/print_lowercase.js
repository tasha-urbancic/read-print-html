const getHTML = require('../http-functions');

function printLowerCase(html) {
  console.log(html.toLowerCase());
}

const requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/module-version/lowercase.html"
};

getHTML(requestOptions, printLowerCase);