'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return (number1) => {
    return (number2) => {
      callCount++;

      if (callCount <= 3 || callCount % 2 === 1) {
        return number1 + number2;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
