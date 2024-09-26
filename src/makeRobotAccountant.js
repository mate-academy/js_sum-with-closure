'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return (firstNumber) => {
    callCount++;

    return (secondNumber) => {
      if (callCount <= 3 || callCount % 2 !== 0) {
        return firstNumber + secondNumber;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
