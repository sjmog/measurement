const sum = (arr) => {
  return arr.reduce((accumulator, value) => accumulator + value);
};

const normalised = (data) => {
  return data.map(value => value / 1000);
};

const summedQuartilesOf = (data) => {
  const dataLength     = data.length;
  const quartileLength = Math.round(dataLength / 4);

  const firstQuartile  = sum(data.slice(0 * quartileLength, 1 * quartileLength));
  const secondQuartile = sum(data.slice(1 * quartileLength, 2 * quartileLength));
  const thirdQuartile  = sum(data.slice(2 * quartileLength, 3 * quartileLength));
  const fourthQuartile = sum(data.slice(3 * quartileLength, dataLength));

  return [firstQuartile, secondQuartile, thirdQuartile, fourthQuartile];
};

const sanitised = (data) => {
  return normalised(summedQuartilesOf(data));
};

module.exports = sanitised;