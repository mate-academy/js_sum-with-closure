'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  const sum = function(firstNumber) {
    return function(secondNumber) {
      count++;

      return count > 3 && count % 2 === 0
        ? 'Bzzz... Error!'
        : firstNumber + secondNumber;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
