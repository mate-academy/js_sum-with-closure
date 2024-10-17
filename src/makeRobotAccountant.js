'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let numberOfCalls = 0;

  return (numberOne = 0) => {
    return (numberTwo = 0) => {
      numberOfCalls++;

      const numbersSum = numberOne + numberTwo;

      return numberOfCalls > 3 && numberOfCalls % 2 === 0
        ? `Bzzz... Error!`
        : numbersSum;
    };
  };
}

module.exports = makeRobotAccountant;
