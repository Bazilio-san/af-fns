const { expect } = require('chai');
const U = require('../../index');

const secMs = 1000;
const minMs = 60 * secMs;
const hourMs = 60 * minMs;
const dayMs = 24 * hourMs;
const weekMs = 7 * dayMs;
const monthMs = 30 * dayMs;
const yearMs = 365 * dayMs;

describe('utils.getTimeStamp() should work properly', () => {
  [
    ['3 years', 3 * yearMs],
    ['4  year', 4 * yearMs],
    ['5y', 5 * yearMs],

    ['2 months', 2 * monthMs],
    ['3month', 3 * monthMs],
    ['4 mo', 4 * monthMs],

    ['2 week', 2 * weekMs],
    ['3week', 3 * weekMs],
    ['4w', 4 * weekMs],

    ['2 days', 2 * dayMs],
    ['3day', 3 * dayMs],
    ['4  d', 4 * dayMs],

    ['2hours', 2 * hourMs],
    ['3 hour', 3 * hourMs],
    ['4  h', 4 * hourMs],

    ['2minutes', 2 * minMs],
    ['3 minute', 3 * minMs],
    ['4m', 4 * minMs],
    ['5 min', 5 * minMs],

    ['2seconds', 2 * secMs],
    ['3 second', 3 * secMs],
    ['4s', 4 * secMs],
    ['5 sec', 5 * secMs],

    ['2 milliseconds', 2],
    ['3 millisecond', 3],
    ['4 millis', 4],
    ['5ms', 5],
    ['67890', 67890],
    [234567, 234567],
  ].forEach(([val, expected]) => {
    it(String(val), () => {
      const result = U.getTimeParamMillis(val);
      expect(result).to.equal(expected);
    });
  });
});
