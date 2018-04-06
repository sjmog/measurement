const cheerio = require('cheerio');
const _ = require('lodash');

const contributionsFrom = (body) => {
  const $ = cheerio.load(body);
  const days = $('rect').get();
  return allContributions(days, $);
};

const allContributions = (days, $) => {
  return days.reduce((contributions, day) => 
                       [...contributions, contributionOn($(day))], []);
};

const contributionOn = ($day) => {
  return [
           $day.data('date'), 
           $day.data('count')
         ];
};

module.exports = contributionsFrom;