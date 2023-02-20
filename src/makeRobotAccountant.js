'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  return (firstNumber) => {
    callsCount++;

    return (secondNumber) => {
      if (callsCount <= 3 || callsCount % 2 === 1) {
        return firstNumber + secondNumber;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
