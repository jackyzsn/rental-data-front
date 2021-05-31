const fs = require('fs');
const path = require('path');

module.exports = (request, response) => {
  const filePath = path.join(__dirname, 'POST.json');
  const stat = fs.statSync(filePath);

  response.writeHead(200, {
    'Content-Type': 'application/json',
    'Content-Length': stat.size,
  });

  const readStream = fs.createReadStream(filePath);
  // We replaced all the event handlers with a simple call to readStream.pipe()

  setTimeout(function () {
    readStream.pipe(response);
  }, 1000);
};
