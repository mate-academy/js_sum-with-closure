'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const result = function getSum(firstNum) {
    return function(secondNum) {
      count += 1;

      if (count <= 3 || (count % 2)) {
        return firstNum + secondNum;
      }

      return 'Bzzz... Error!';
    };
  };

  return result;
}

module.exports = makeRobotAccountant;
