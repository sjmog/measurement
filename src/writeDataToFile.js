const fs = require('fs');

const writeToFile = (contents) => {
  const filePath = `./data/${new Date()}.json`;

  fs.writeFile(filePath, contents, handleWriteError); 
};

const handleWriteError = (err) => { return console.error(err) };

module.exports = writeToFile;