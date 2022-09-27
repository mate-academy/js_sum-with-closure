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

      if (callCounter >= 4 && callCounter % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return firstNumber + secondNumber;
      }
    };
  };
}

module.exports = makeRobotAccountant;
