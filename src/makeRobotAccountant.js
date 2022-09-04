'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(firstValue) {
    count++;

    return function(secondValue) {
      if (count >= 4 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstValue + secondValue;
    };
  };
}

module.exports = makeRobotAccountant;
