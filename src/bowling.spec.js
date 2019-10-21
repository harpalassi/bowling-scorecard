import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import { Bowling } from './bowling.js';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Bowling Scorecard', () => {
  let bowling = Bowling;
  beforeEach(() => {
    bowling = new Bowling();
    // This example test suite is for a nudge in the right direction but feel free
    // change the shape of the specs or even move in a completely different direction that you feel best for
    // the assignment. Make sure to break down the issue and keep things organized.
  });

  // helper function, takes in number of pins down and how many rolls.
  const addRolls = (pins, rolls) => {
    for (let i = 0; i < rolls; i++) {
      bowling.addRoll(pins);
    }
  };

  // const myScoringAlgorithm = frames => {};

  it('calculates total with all gutterballs', () => {
    addRolls(0, 20);
    expect(bowling.getScore()).to.be.eql(0);
  });

  it('calculates 5', () => {
    addRolls(4, 20);
    expect(bowling.getScore()).to.be.eql(80);
  });

  it('can roll all ones', () => {
    addRolls(1, 5);
    addRolls(1, 15);
    expect(bowling.getScore()).to.be.eql(20);
  });

  it('calculates total with all fours', () => {
    addRolls(4, 20);
    expect(bowling.getScore()).to.be.eql(80);
  });

  it('does not accept negative pins', () => {
    expect(() => bowling.addRoll(-1)).to.throw();
  });

  it('does not accept greater than pins per roll', () => {
    expect(() => bowling.addRoll(11)).to.throw();
  });

  it('calculates total with a spare and all gutterballs', () => {
    addRolls(5, 2);
    addRolls(0, 18);
    expect(bowling.getScore()).to.be.eql(10);
  });

  it('calculates total with a spare and all threes', () => {
    addRolls(5, 2);
    addRolls(3, 18);
    expect(bowling.getScore()).to.be.eql(67);
  });

  it('calculates total with a strike and all gutters', () => {
    addRolls(10, 1);
    addRolls(0, 18);
    expect(bowling.getScore()).to.be.eql(10);
  });

  it('calculates total with a strike and all threes', () => {
    addRolls(10, 1);
    addRolls(3, 18);
    expect(bowling.getScore()).to.be.eql(70);
  });

  it('calculates game of 300', () => {
    addRolls(10, 12);
    expect(bowling.getScore()).to.be.eql(300);
  });
});
