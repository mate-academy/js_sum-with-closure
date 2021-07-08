'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let cnt = 0;

  return function getSum(firstNumber) {
    cnt++;

    return function calculate(secondNumber) {
      return (cnt > 3 && cnt % 2 === 0)
        ? 'Bzzz... Error!'
        : firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
