'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return (firstNumber) => {
    return (secondNumber) => {
      callCount++;

      return callCount < 4 || callCount % 2 === 1
        ? firstNumber + secondNumber
        : 'Bzzz... Error!';
    };
  };
};

module.exports = makeRobotAccountant;
