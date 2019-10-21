// create Bowling class object to intialize gamescoring
export class Bowling {
  constructor() {
    // rolls is the array of total rolls in the entire game
    this.rolls = [];
  }
  // this method takes in the amount of pins hit and will add them into the rolls array
  addRoll(pins) {
    if (pins < 0 || pins > 10) {
      throw new TypeError('cant be negative or greater than 10 pins');
    } else this.rolls.push(pins);
  }

  //scoring method to calculate total score for the game
  getScore() {
    let score = 0;
    let rollIndex = 0;
    //iterate through 10 frame arrays within roll array.
    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      // the first roll of the frame will be added to the score and so will the second roll by increasing the index
      score += this.rolls[rollIndex] + this.rolls[rollIndex + 1];

      // if a spare is rolled within a frame (10 pins total), add the score of the following 1st index of frame
      if (this.isSpare(rollIndex) || this.isStrike(rollIndex)) {
        score += this.rolls[rollIndex + 2];
      }
      // if a strike
      if (this.isStrike(rollIndex)) {
        rollIndex++;
      } else rollIndex += 2;
    }
    return score;
  }

  isSpare(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
  }

  isStrike(rollIndex) {
    return this.rolls[rollIndex] === 10;
  }
}
