'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(firstNum) {
    count++;

    return function(secondNum) {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNum + secondNum;
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
