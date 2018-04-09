const _ = require('lodash');

const timeToHireGroup = (user) => {
  const FIRST_TWO_WEEKS    = _.range(-100,  14);
  const FIRST_FOUR_WEEKS   = _.range(  15,  28);
  const FIRST_TWELVE_WEEKS = _.range(  29,  84);
  const LATER              = _.range(  85, 182);

  const timeToHire = parseInt(user.timeToHire);

  if(FIRST_TWO_WEEKS.includes(timeToHire))    { return toTrainingOutput(1) };
  if(FIRST_FOUR_WEEKS.includes(timeToHire))   { return toTrainingOutput(2) };
  if(FIRST_TWELVE_WEEKS.includes(timeToHire)) { return toTrainingOutput(3) };
  if(LATER.includes(timeToHire))              { return toTrainingOutput(4) };

  return toTrainingOutput(5);
};

const toTrainingOutput = (groupNumber) => {
  let template = {
    group1: 0,
    group2: 0,
    group3: 0,
    group4: 0,
    group5: 0
  };

  template[`group${groupNumber}`] = 1;

  return template;
};

module.exports = timeToHireGroup;