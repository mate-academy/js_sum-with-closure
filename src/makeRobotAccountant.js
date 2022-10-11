'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(num1) {
    return (num2) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
