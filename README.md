# Bowling Scorecard 🎳

[![Build Status](https://travis-ci.com/harpalassi/bowling-scorecard.svg?branch=master)](https://travis-ci.com/harpalassi/bowling-scorecard)

[![Coverage Status](https://coveralls.io/repos/github/harpalassi/bowling-scorecard/badge.svg)](https://coveralls.io/github/harpalassi/bowling-scorecard)

_Bowling Scorecard_ is an app built with `JavaScript` and extensively tested using the `Chai` assertion library. This app calculates scores from a bowling game from certain frames or a full game of ten frames.

## Installation

Clone and download this folder to your hard disk. You will then navigate to the folder and run `npm install` or `yarn`. This will install all dependencies needed. The files are within the `src` folder and are `bowling.js` and `bowling.spec.js`

### Functionality

The game of bowling consists of 10 frames, with a minimum score of zero and a maximum of 300. Each frame consists of two chances to knock down ten pins. Instead of “points” in football or “runs” in baseball, we use “pins” in bowling.

Knocking down all ten pins on your first ball is called a strike, if it takes two shots to knock down all ten pins, it’s called a spare.
A strike is worth 10, plus the value of your next two rolls. A spare is worth 10, plus the value of your next roll.

## My Approach

I created a `Bowling` class for the game which keeps track of all rolls within the game. For open frames (with no strikes or spares), the total was simply the amount of pins that were knocked down, however, strikes and spares carry bonus points which are determined from the next one or two rolls.

For this reason, I set up a frame index in which a full game would have 10 frames. I iterate through the frames index within the rolls array, so that the bonuses can be applied correctly and added to the score.

In the case of incomplete games, I made the number of the frames an argument in my `getScore` method. This way you can test the value of, for example, 3 frames by using `expect(bowling.getScore(3)).to.be.eql(18);`

To keep things DRY, I used a helper function in my tests to quickly enter the number of pins knocked down and for how many rolls.

```javascript
const addRolls = (pins, rolls) => {
  for (let i = 0; i < rolls; i++) {
    bowling.addRoll(pins);
  }
};
```

### Testing

To start the tests, run `npm run test` or `npm run test:tdd` for watch mode. Tests include the following:

- Rolls do not accept negative numbers or more than 10 pins per roll

- Can confirm whether a strike or a spare is made within a frame

- Calculates total score with all gutter-balls

- Calculates incomplete games with open frames as well as spares and strikes.

- Calculates a perfect game of 300 with all strikes
