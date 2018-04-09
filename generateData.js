const getCommitsFor = require('./src/getCommitsFor');
const writeToFile = require('./src/writeDataToFile');
const timeToHireGroup = require('./src/timeToHireGroup');
const sanitised = require('./src/sanitised');
const DATA = require('./raw-data/data.json');

// Select only data for the first sixty days of work (PC + W1 + W2)
const NUMBER_OF_DAYS_TO_COUNT = 60;

const run = async () => {
  const data = await Promise.all(DATA.map(async (user) => {
    const commits = (await getCommitsFor(user, NUMBER_OF_DAYS_TO_COUNT));
    const labels = timeToHireGroup(user);

    if(commits === undefined || commits.length === 0 || commits.every(commitCount => commitCount === 0) || labels === undefined) {
      return;
    };

    return { 
             input:  sanitised(commits), 
             output: labels
           };
  }));

  const filteredData = data.filter((datum) => {
    return (datum !== null) && (datum !== undefined)
  });

  return JSON.stringify(filteredData);
};

run().then(data => writeToFile(data));