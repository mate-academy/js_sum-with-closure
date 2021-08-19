'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function getSum(firstValue) {
    return function(secondValue) {
      counter++;

      if (counter <= 3 || counter % 2 === 1) {
        return firstValue + secondValue;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
