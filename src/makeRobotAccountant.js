'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;

  function getSum(firstValue) {
    countCalls++;

    return function(secondValue) {
      const sum = firstValue + secondValue;

      if (countCalls > 3 && countCalls % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return sum;
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
