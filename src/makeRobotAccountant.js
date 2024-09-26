'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sumOfOperations = 0;

  return firstValue => {
    sumOfOperations++;

    return lastValue => {
      return sumOfOperations >= 4 && sumOfOperations % 2 === 0
        ? 'Bzzz... Error!'
        : firstValue + lastValue;
    };
  };
}

module.exports = makeRobotAccountant;
