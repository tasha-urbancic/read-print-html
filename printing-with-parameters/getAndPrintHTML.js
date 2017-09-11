//This function should use a buffering technique
//  to append each chunk of data to a variable as 
//  it is received, and then console.log the data once 
//  all of the data has been received.

const https = require('https');

function getAndPrintHTML(options) {

  https.get(`https://${options.host}${options.path}`, (res) => {
    
    res.setEncoding('utf8');

    let rawData = '';
    res.on('data', (chunk) => {
      rawData += chunk;
    });

    res.on('end', () => {
      console.log(rawData);
    });

  });
}

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
