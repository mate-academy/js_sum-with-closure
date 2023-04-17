'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let callCounter = 0;

  return (firstNumber) => {
    return (secondNumber) => {
      callCounter++;

      if (callCounter < 3 || callCounter % 2 !== 0) {
        return secondNumber + firstNumber;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
