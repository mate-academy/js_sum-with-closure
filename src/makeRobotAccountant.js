'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant(a) {
  let counterCall = 0;

  return (firstNumber) => {
    return (secondNumber) => {
      counterCall++;

      const isLimitExceeded = counterCall > 3;
      const isCallCounterOdd = counterCall % 2 === 0;

      return isLimitExceeded && isCallCounterOdd
        ? 'Bzzz... Error!'
        : firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
