'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(firstNumber) {
    return function(secondNumber) {
      if (count >= 3 && count % 2 !== 0) {
        count++;

        return 'Bzzz... Error!';
      }
      count++;

      return firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
