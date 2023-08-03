'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(num1) {
    const sum = (num2) => {
      count++;

      return count < 4 || count % 2 !== 0 ? num1 + num2 : 'Bzzz... Error!';
    };

    return sum;
  }

  return getSum;
}

module.exports = makeRobotAccountant;
