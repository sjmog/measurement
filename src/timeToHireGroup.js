const _ = require('lodash');

const timeToHireGroup = (user) => {
  const FIRST_FOUR_WEEKS   = _.range(-100,  28);
  const FIRST_TWELVE_WEEKS = _.range(  29,  84);
  const LATER              = _.range(  85, 182);

  if(FIRST_FOUR_WEEKS.includes(user.timeToHire)) { return 1 };
  if(FIRST_TWELVE_WEEKS.includes(user.timeToHire)) { return 2 };
  if(LATER.includes(user.timeToHire)) { return 3 };

  return 4;
};

module.exports = timeToHireGroup;