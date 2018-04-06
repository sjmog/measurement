# Measurement

Uses machine learning to predict time to hire based on commit patterns.

### How to use

`npm install` and `npm start`. At the moment it grabs my (@sjmog) data, pretends I started the course on the 3rd of May 2017, and have a time-to-hire of 6 days. It uses a 60-day record.

It stores this data ready for consuming via a NN like [Brain.js](https://github.com/BrainJS/brain.js).

### What next

- Grab actual data from people and train the NN using a few hundred past students. Play around with parameters and see if the accuracy shows anything up. :construction:
- If the accuracy feels ok, use it to predict TTH for cohorts.