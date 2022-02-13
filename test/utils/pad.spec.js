const { expect } = require('chai');
const U = require('../../index');

const u = undefined;

describe('padR()', () => {
  [
    ['abc', 10, u, 'abc       '],
    ['abc', 10, '-', 'abc-------'],
    ['abcabcabcabc', 10, u, 'abcabcabcabc'],
    [null, 10, u, '          '],
    ['', 10, u, '          '],
  ].forEach(([str, strLength, padSymbol, expected], index) => {
    it(`case ${index}`, () => {
      expect(U.padR(str, strLength, padSymbol))
        .to
        .equal(expected);
    });
  });
});

describe('padL()', () => {
  [
    ['abc', 10, u, '       abc'],
    ['abc', 10, '-', '-------abc'],
    ['abcabcabcabc', 10, u, 'abcabcabcabc'],
    [null, 10, u, '          '],
    ['', 10, u, '          '],
  ].forEach(([str, strLength, padSymbol, expected], index) => {
    it(`case ${index}`, () => {
      expect(U.padL(str, strLength, padSymbol))
        .to
        .equal(expected);
    });
  });
});
