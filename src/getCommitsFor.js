const request = require('request-promise');
const contributionsFrom = require('./contributionsFrom');
const commitsInPeriod = require('./commitsInPeriod');

async function getCommitsFor(user, numberOfDays) {
  const url = `https://www.github.com/${user.githubId}`;
  let commits;

  try {
    await request(url, async (err, response, body) => {
      if (err) throw err;
      if (response.statusCode === 404) throw `User '${user.githubId}' not found`

      const contributions = await contributionsFrom(body);
      commits = await commitsInPeriod(contributions, user.startDate, numberOfDays);
    });
  } catch(e) {
    console.error(`Failed to fetch data for ${user.githubId}`)
  }

  return commits;
};

module.exports = getCommitsFor;