'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return (firstInput) => {
    return (secondInput) => {
      callCount++;

      if (callCount <= 3 || callCount % 2 === 1) {
        return firstInput + secondInput;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
