const request = require('request-promise');
const contributionsFrom = require('./contributionsFrom');
const commitsInPeriod = require('./commitsInPeriod');

async function getCommitsFor(user, numberOfMonths) {
  const url = `https://www.github.com/${user.username}`;
  let commits;

  await request(url, async (err, response, body) => {
    if (err) throw err;
    if (response.statusCode === 404) throw `User '${user}' not found`

    const contributions = await contributionsFrom(body);
    commits = await commitsInPeriod(contributions, user.startMonth, user.startDay, numberOfMonths);
  });

  return commits;
};

module.exports = getCommitsFor;