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

  let addRolls = (pins, times) => {
    for (let i = 0; i < times; i++) {
      bowling.addRoll(pins);
    }
  };

  // const myScoringAlgorithm = frames => {};

  it('it calculates total with all gutterballs', () => {
    addRolls(0, 20);
    expect(bowling.getScore()).to.be.eql(0);
  });

  it('it calculates total with all fours', () => {
    addRolls(4, 20);
    expect(bowling.getScore()).to.be.eql(80);
  });

  it('it calculates total with a spare and all gutterballs', () => {
    addRolls(5, 2);
    addRolls(0, 18);
    expect(bowling.getScore()).to.be.eql(10);
  });

  it('it calculates total with a spare and all threes', () => {
    addRolls(5, 2);
    addRolls(3, 18);
    expect(bowling.getScore()).to.be.eql(67);
  });

  it('it calculates total with a strike and all gutters', () => {
    addRolls(10, 1);
    addRolls(0, 18);
    expect(bowling.getScore()).to.be.eql(10);
  });

  it('it calculates total with a strike and all threes', () => {
    addRolls(10, 1);
    addRolls(3, 18);
    expect(bowling.getScore()).to.be.eql(70);
  });

  it('it calculates game of 300', () => {
    addRolls(10, 12);
    expect(bowling.getScore()).to.be.eql(300);
  });

  // it('calculates correct score provided a game', () => {
  //   const frames = [[0, 1], [0, 8], [8, 1]];

  //   let score = myScoringAlgorithm(frames);

  //   expect(score).to.be.eql(18);
  // });
});
