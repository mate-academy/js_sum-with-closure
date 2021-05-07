'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  const sum = function(firstNumber) {
    if (count === 4) {
      count = 2;
    }

    return function(secondNumber) {
      count++;

      return count === 4
        ? 'Bzzz... Error!'
        : firstNumber + secondNumber;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
