import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('My bowling scorer', () => {
  beforeEach(() => {
    // This example test suite is for a nudge in the right direction but feel free
    // change the shape of the specs or even move in a completely different direction that you feel best for
    // the assignment. Make sure to break down the issue and keep things organized.
  });

  const myScoringAlgorithm = frames => {};

  it('calculates correct score provided a game', () => {
    const frames = [[0, 1], [0, 8], [8, 1]];

    let score = myScoringAlgorithm(frames);

    expect(score).to.be.eql(18);
  });
});
