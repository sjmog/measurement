async function commitsInPeriod(contributions, startDate, numberOfDays) {
  const startIndex = contributions.findIndex(([date, _]) => date === startDate);

  return contributions
           .slice(startIndex, startIndex + numberOfDays)
           .map(([_, commitCount]) => commitCount);
};

module.exports = commitsInPeriod;