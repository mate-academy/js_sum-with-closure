'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant(a) {
  let counter = 0;

  return (firstNum) => {
    return (secondNum) => {
      counter++;

      const isCallCounterBiggerThanThree = counter > 3;
      const isCallCounterOdd = counter % 2 === 0;

      return isCallCounterBiggerThanThree && isCallCounterOdd
        ? 'Bzzz... Error!'
        : firstNum + secondNum;
    };
  };
}

module.exports = makeRobotAccountant;
