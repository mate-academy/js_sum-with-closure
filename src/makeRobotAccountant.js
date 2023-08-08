'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = function(firstNumber) {
    count++;

    return function(secondNumber) {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNumber + secondNumber;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
