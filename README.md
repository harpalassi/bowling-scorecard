# Bowling Scorecard 🎳

[![Build Status](https://travis-ci.org/luketevl/boilerplate-mocha-chai.svg?branch=master)](https://travis-ci.org/luketevl/boilerplate-mocha-chai)

[![Coverage Status](https://coveralls.io/repos/github/luketevl/boilerplate-mocha-chai/badge.svg?branch=master)](https://coveralls.io/github/luketevl/boilerplate-mocha-chai?branch=master)

_Bowling Scorecard_ is built using Test-Driven Development in `JavaScript` with tests using the `Chai` assertion library.
This was a fantastic exercise in learning how to build an algorithm from the ground up with testing first and the algorithm second. I was always in watch mode and ensuring that each test remained passing before breaking down the next step in the problem. I really liked that it was much more simple to refactor code when the tests are already in place.

## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installation

Please clone and download this folder to your hard disk. You will then navigate to the folder and run `npm install` or `yarn`. This will install all dependencies needed. You will then run `npm run test:tdd` to begin all tests and remain in watch mode.

### Functionality

The game of bowling consists of 10 frames, with a minimum score of zero and a maximum of 300. Each frame consists of two chances to knock down ten pins. Instead of “points” in football or “runs” in baseball, we use “pins” in bowling.

Knocking down all ten pins on your first ball is called a strike, if it takes two shots to knock down all ten pins, it’s called a spare.
A strike is worth 10, plus the value of your next two rolls. A spare is worth 10, plus the value of your next roll.

## My Approach

I created a `Bowling` class for the game which keeps track of all rolls within the game. For open frames (with no strikes or spares), the total was simply the amount of pins that were knocked down, however, strikes and spares carry bonus points which are determined from the next one or two rolls.

For this reason, I set up a frame index in which a full game would have 10 frames. I iterate through the frames index within the rolls array, so that the bonuses can be applied correctly and added to the score.

In the case of incomplete games, I made the number of the frames an argument in my `getScore` method. This way you can test the value of, for example, 3 frames by using `expect(bowling.getScore(3)).to.be.eql(18);`

To keep things DRY, I used a helper function in my tests to quickly enter the number of pins knocked down and for how many rolls.

```// helper function, takes in number of pins down and how many rolls.
  const addRolls = (pins, rolls) => {
    for (let i = 0; i < rolls; i++) {
      bowling.addRoll(pins);
    }
  };
```

### Testing

I wrote tests to ensure many things about the algorithm were robust. These including things such as the following:

- Does not accept negative numbers or more than 10 pins per roll

- Calculates total with all gutter-balls

- Calculates incomplete games with open frames including spares and with strikes.

- Calculates total with all strikes, and strikes with open frames

- Calculates total with spares and open frames

- Calculates a perfect game of 300
