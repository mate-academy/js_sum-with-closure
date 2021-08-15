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

      if (callCount <= 3) {
        return firstInput + secondInput;
      }

      if (callCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstInput + secondInput;
    };
  };
}

module.exports = makeRobotAccountant;
