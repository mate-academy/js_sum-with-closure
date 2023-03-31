'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  function getSum(num1) {
    return function(num2) {
      if (count > 3) {
        count++;

        return count % 2 === 0
          ? num1 + num2
          : 'Bzzz... Error!';
      }

      count++;

      return num1 + num2;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
