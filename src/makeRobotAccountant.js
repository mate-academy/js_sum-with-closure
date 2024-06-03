'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(number) {
    return function(value) {
      count++;

      const result = value + number;

      if (count % 2 === 0 && count > 3) {
        return 'Bzzz... Error!';
      } else {
        return result;
      }
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
