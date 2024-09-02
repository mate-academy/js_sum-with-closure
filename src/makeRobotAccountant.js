'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return function(firstNumber) {
    return function(secondNumber) {
      callCount++;

      return callCount <= 3 || callCount % 2 !== 0
        ? firstNumber + secondNumber
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
