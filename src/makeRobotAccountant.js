'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCounter = 0;

  return function(firstNumber) {
    return function(secondNumber) {
      callCounter++;

      if (callCounter > 3 && callCounter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
