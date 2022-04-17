'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const maxCount = 3;

  function getSum(num1) {
    count++;

    return function(num2) {
      if (count <= maxCount
      || count % 2 === 1) {
        return num1 + num2;
      } else {
        return 'Bzzz... Error!';
      }
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
