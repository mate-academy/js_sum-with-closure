'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(firstNumber) {
    return function(secondNumber) {
      count++;

      if (count >= 4 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return firstNumber + secondNumber;
      }
    };
  };
}

module.exports = makeRobotAccountant;
