'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function getSum(firstNum) {
    return function getSum2(secNum) {
      count++;

      if (count >= 3 && (count % 2) === 0) {
        return 'Bzzz... Error!';
      } else {
        return firstNum + secNum;
      }
    };
  };
}

module.exports = makeRobotAccountant;
