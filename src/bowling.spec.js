import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import { Bowling } from './bowling.js';

chai.use(sinonChai);
sinonStubPromise(sinon);

describe('Bowling Scorecard', () => {
  let bowling = Bowling;
  beforeEach(() => {
    bowling = new Bowling();
  });

  // helper function, takes in number of pins down and how many rolls.
  const addRolls = (pins, rolls) => {
    for (let i = 0; i < rolls; i++) {
      bowling.addRoll(pins);
    }
  };

  it('addRoll does not accept negative pins', () => {
    expect(() => bowling.addRoll(-1)).to.throw();
  });

  it('addRoll does not accept greater than 10 pins per roll', () => {
    expect(() => bowling.addRoll(11)).to.throw();
  });

  it('rolledStrike calculates whether a single roll is a 10', () => {
    bowling.addRoll(10);
    expect(bowling.rolledStrike(0)).to.be.true;
  });

  it('rolledSpare calculates whether two subsequent rolls equal 10', () => {
    bowling.addRoll(4);
    bowling.addRoll(6);
    expect(bowling.rolledSpare(0)).to.be.true;
  });

  it('getScore calculates total with all gutterballs', () => {
    addRolls(0, 20);
    expect(bowling.getScore(10)).to.be.eql(0);
  });

  it('getScore calculates incomplete game of 5 frames', () => {
    addRolls(3, 10);
    expect(bowling.getScore(5)).to.be.eql(30);
  });

  it('getScore calculates incomplete game of 3 frames', () => {
    addRolls(0, 2);
    addRolls(1, 2);
    addRolls(8, 2);
    expect(bowling.getScore(3)).to.be.eql(18);
  });

  it('getScore calculates incomplete game of 2 frames with a spare', () => {
    addRolls(5, 2);
    addRolls(1, 2);
    expect(bowling.getScore(2)).to.be.eql(13);
  });

  it('getScore calculates incomplete game of 4 frames with a strike', () => {
    addRolls(10, 1);
    addRolls(1, 6);
    expect(bowling.getScore(4)).to.be.eql(18);
  });

  it('getScore calculates total with all fours', () => {
    addRolls(4, 20);
    expect(bowling.getScore(10)).to.be.eql(80);
  });

  it('getScore calculates total with all ones', () => {
    addRolls(1, 5);
    addRolls(1, 15);
    expect(bowling.getScore(10)).to.be.eql(20);
  });

  it('getScore calculates total with a spare and all gutterballs', () => {
    addRolls(5, 2);
    addRolls(0, 18);
    expect(bowling.getScore(10)).to.be.eql(10);
  });

  it('getScore calculates total with a spare and all threes', () => {
    addRolls(5, 2);
    addRolls(3, 18);
    expect(bowling.getScore(10)).to.be.eql(67);
  });

  it('getScore calculates total with a strike and all gutters', () => {
    addRolls(10, 1);
    addRolls(0, 18);
    expect(bowling.getScore(10)).to.be.eql(10);
  });

  it('getScore calculates total with a strike and all threes', () => {
    addRolls(10, 1);
    addRolls(3, 18);
    expect(bowling.getScore(10)).to.be.eql(70);
  });

  it('getScore calculates perfect game of 300', () => {
    addRolls(10, 12);
    expect(bowling.getScore(10)).to.be.eql(300);
  });
});
