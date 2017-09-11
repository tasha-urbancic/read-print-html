const https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(`https://${requestOptions.host}${requestOptions.path}`, (res) => {
    res.setEncoding('utf8');
    // let rawData = '';
    res.on('data', (chunk) => {
      // rawData += `${chunk}\n`;
      console.log(`${chunk}\n`);
      
    });
    // res.on('end', () => {
    //   const parsedData = JSON.parse(rawData);
    //   for (let i = 0; i < 10; i++) {
    //     console.log(parsedData[i].version);
    //   }
    // });
  });

}

getAndPrintHTMLChunks();
