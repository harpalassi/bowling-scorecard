/** Class representing a bowling game. */
export class Bowling {
  /**
   * Rolls is the array of all rolls made in the entire game
   */
  constructor() {
    this.rolls = [];
  }

  /**
   * this method takes in the amount of pins hit and will add them into the rolls array
   * @param  {number} pins
   */
  addRoll(pins) {
    if (pins < 0 || pins > 10) {
      throw new TypeError("Pins can't be negative or greater than 10");
    } else this.rolls.push(pins);
  }

  /**
   * spare method to determine if two rolls within a frame equals a spare
   * @param  {number} rollIndex
   * @return {boolean} true if roll indices add up to 10
   */
  rolledSpare(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
  }

  /**
   * determines if a single roll is a strike
   * @param  {number} rollIndex
   * @return {boolean} true if a single roll is 10
   */
  rolledStrike(rollIndex) {
    return this.rolls[rollIndex] === 10;
  }

  /**
   * scoring method to calculate total score for the bowling game
   * within all frames or selection of frames
   * @param {number} frames - the number of frames completed - 10 is full game.
   * @return {number} score - total score of game
   */
  getScore(frames) {
    let score = 0;
    let rollIndex = 0;
    // iterate through 10 frame arrays within roll array.
    for (let frameIndex = 0; frameIndex < frames; frameIndex++) {
      /**
       * open frame - the first and second roll of the frame will be added to the score
       */
      score += this.rolls[rollIndex] + this.rolls[rollIndex + 1];

      // if a spare or strike is rolled within a frame (10 pins total), add the score of the following roll as bonus
      if (this.rolledSpare(rollIndex) || this.rolledStrike(rollIndex)) {
        score += this.rolls[rollIndex + 2];
      }
      // if a strike, frame is only one roll
      if (this.rolledStrike(rollIndex)) {
        rollIndex++;
      }
      // otherwise frame is two rolls
      else rollIndex += 2;
    }
    return score;
  }
}
