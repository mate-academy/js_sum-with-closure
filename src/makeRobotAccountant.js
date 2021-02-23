'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function getFirsSum(firstValue) {
    return function getSecondSum(secondValue) {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return firstValue + secondValue;
      }
    };
  };
}

module.exports = makeRobotAccountant;
