const getCommitsFor = require('./src/getCommitsFor');

// Select only data for the first two months of work (PC + W1-4)
const NUMBER_OF_MONTHS_TO_COUNT = 2;

const user = { username: 'sjmog', startMonth: 5, startDay: 3 };
getCommitsFor(user, NUMBER_OF_MONTHS_TO_COUNT).then((commits) => { console.log(commits) });