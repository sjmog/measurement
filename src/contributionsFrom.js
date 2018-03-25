const cheerio = require('cheerio');
const _ = require('lodash');

async function contributionsFrom(body) {
  const $ = cheerio.load(body);
  return $('rect').get().reduce((data, rect) => {
    const value = $(rect).data('count');
    const [year, month, day] = $(rect).data('date').split('-').map(
      dateNum => parseInt(dateNum));
    _.setWith(data, [year, month, day], value, Object);

    return data;
  }, {});
};

module.exports = contributionsFrom;