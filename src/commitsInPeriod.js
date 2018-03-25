const MONTHS_TO_DAYS_IN_MONTH = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
}

async function commitsInPeriod(contributions, startMonth, startDay, numberOfMonths) {
  // Push commits from some start date for two months into an array
  let commits = [];
  // count two months
  for (i = 0; i <= numberOfMonths + 1; i++) {
    // count every day of that month
    const month = startMonth + i;
    let thisIterationStartDay, thisIterationEndDay;

    if(i === 0) {
      // first month, count from the startDay to the end of the month
      thisIterationStartDay = startDay;
      thisIterationEndDay   = MONTHS_TO_DAYS_IN_MONTH[month];
    } else if(i === 1) {
      // second month, count all the days
      thisIterationStartDay = 1;
      thisIterationEndDay   = MONTHS_TO_DAYS_IN_MONTH[month];
    } else if(i === 2) {
      // third month, count from the start of the month to the day before the startDay
      thisIterationStartDay = 1;
      thisIterationEndDay   = startDay - 1;
    }

    for (day = thisIterationStartDay; day <= thisIterationEndDay; day++) {
      commits.push(contributions["2017"][String(month)][String(day)]);
    };
  };

  return commits;
};

module.exports = commitsInPeriod;