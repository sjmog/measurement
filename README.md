# Measurement

Uses machine learning to predict time to hire based on commit patterns.

### How to use

## Quick start

1. Clone the repo, cd into the new directory and `npm install`
2. Get these files from @sjmog
  a. data.json, data.csv
3. Both data files go into a top level directory called `./raw-data`
4. `npm run generate` grabs commit data for all users listed in data.json and saves it ready for [Brain.js](https://github.com/BrainJS/brain.js), in a top level directory called `./data`.
5. `npm run train` uses the commit data to train a neural network and outputs an assessment of the model. NOTE: you'll need to update the `require` statement on line 2 of `train.js` to point at the correct data file (which should be in a top level directory called `./data`)

### What next

- Play around with parameters and see if the accuracy shows anything up. :construction:
- If the accuracy feels ok, use it to predict TTH for cohorts.
