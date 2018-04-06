const fs = require('fs');

const writeToFile = (commits, timeToHireGroup) => {
  const filePath = `./data/${new Date()}.json`;
  const contents = `{ "input": [${ commits }], "output": [${ timeToHireGroup }] }`;

  fs.writeFile(filePath, contents, handleWriteError);
};

const handleWriteError = (err) => { return console.error(err) }

module.exports = writeToFile;