'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let iterationCount = 0;

  return (firstNumber) => {
    return (secondNumber) => {
      iterationCount++;

      if (iterationCount > 3 && !(iterationCount % 2)) {
        return 'Bzzz... Error!';
      }

      return firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
