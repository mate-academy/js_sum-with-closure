'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const result = function getSum(firstNum) {
    return function(secondNum) {
      count++;

      return (count <= 3 || (count % 2))
        ? firstNum + secondNum
        : 'Bzzz... Error!';
    };
  };

  return result;
}

module.exports = makeRobotAccountant;
