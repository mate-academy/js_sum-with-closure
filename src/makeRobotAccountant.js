'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const errorMessage = 'Bzzz... Error!';
  let callCount = 0;
  const robotAccountant = function(firstNumber) {
    return function(secondNumber) {
      callCount++;

      if (callCount > 3 && callCount % 2 === 0) {
        callCount = 0;

        return errorMessage;
      }

      return firstNumber + secondNumber;
    };
  };

  return robotAccountant;
}

module.exports = makeRobotAccountant;
