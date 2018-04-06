const getCommitsFor = require('./src/getCommitsFor');
const writeToFile = require('./src/writeDataToFile');
const timeToHireGroup = require('./src/timeToHireGroup');

// Select only data for the first sixty days of work (PC + W1 + W2)
const NUMBER_OF_DAYS_TO_COUNT = 60;

// Schema for all users
const user = { username: 'sjmog', startDate: '2017-05-03', timeToHire: 6 };

getCommitsFor(user, NUMBER_OF_DAYS_TO_COUNT)
  .then(commits => writeToFile(commits, timeToHireGroup(user)));