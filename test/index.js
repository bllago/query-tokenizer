import { assert } from 'chai';
import { getTokens } from '../src';
// import nGram from '../src/helpers/nGram';

describe('getTokens test', () => {
  it('should test getToken function with query on english', () => {
    const query = 'I am looking for javascript developer who knows reactjs and css';
    const lang = 'en';
    const expectedVal = ['javascript', 'developer', 'reactjs', 'css'];
    assert(getTokens(query, lang) === expectedVal, 'getTokens returns expected value');
  });

  it('should test getToken function with query without lang', () => {
    const query = 'I am looking for javascript developer who knows reactjs and css';
    const expectedVal = ['javascript', 'developer', 'reactjs', 'css'];
    assert(getTokens(query) === expectedVal, 'getTokens returns expected value');
  });
});

// describe('nGram test', () => {
//   it('should test nGram', () => {
//     const bigram = nGram(2);
//     const inputArr = ['javascript', 'developer', 'reactjs'];
//     const expectedResult = [['javascript', 'developer'], ['developer', 'reactjs']];
//     assert(bigram(inputArr) === expectedResult, 'nGram return expected value');
//   });
// });
