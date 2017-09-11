//This function should use a buffering technique
//  to append each chunk of data to a variable as 
//  it is received, and then console.log the data once 
//  all of the data has been received.

const https = require('https');

function getAndPrintHTML() {
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(`https://${requestOptions.host}${requestOptions.path}`, (res) => {
    
    res.setEncoding('utf8');

    let rawData = '';
    res.on('data', (chunk) => {
      rawData += chunk;
    });

    res.on('end', () => {
      console.log(rawData);
      // const parsedData = JSON.parse(rawData);
      // for (let i = 0; i < 10; i++) {
      //   console.log(parsedData[i].version);
      // }
    });

  });
}

getAndPrintHTML();