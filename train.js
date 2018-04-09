const brain = require('brain.js');
const DATA = require('./data/Mon Apr 09 2018 16:29:38 GMT+0100 (BST).json');

const trainData = DATA.slice(0, 7 * Math.round(DATA.length / 8));
const testData  = DATA.slice(7 * Math.round(DATA.length / 8), DATA.length);
let net = new brain.NeuralNetwork();

console.log('training net...');

const trainResult = net.train(trainData, { iterations: 50000, learningRate: 0.3 });

console.log('train result', trainResult)
console.log('testing result')

let correct = 0
let incorrect = 0;

const winningKey = (data) => {
  let winningKey = 'group1';

  Object.keys(data).forEach(function(key){
    winningKey = (data[key] > data[winningKey]) ? key : winningKey;
  });

  return winningKey;
}; 

for(let i = 0; i < testData.length; i++) {
  let testOutput = testData[i].output;
  const result = net.run(testData[i].input);

  console.log("expecting", winningKey(testOutput));
  if(winningKey(testOutput) === winningKey(result)) {
    console.log('correct!');
    correct++;
  } else {
    console.log('incorrect!');
    incorrect++;
  }
  console.log(result);
};

console.log('correct', correct)
console.log('incorrect', incorrect)
