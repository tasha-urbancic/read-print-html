const getHTML = require('../http-functions');

function printReverse(html) {
  console.log(html.split('').reverse().join(''));
}

const requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/module-version/reverse.html"
};

getHTML(requestOptions, printReverse);