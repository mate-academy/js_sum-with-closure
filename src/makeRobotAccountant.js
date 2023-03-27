'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant(a) {
  let counterCall = 0;

  return (firstNum) => {
    return (secondNum) => {
      counterCall++;

      const isLimitExceeded = counterCall > 3;
      const isCallCounterOdd = counterCall % 2 === 0;

      return isLimitExceeded && isCallCounterOdd
        ? 'Bzzz... Error!'
        : firstNum + secondNum;
    };
  };
}

module.exports = makeRobotAccountant;
