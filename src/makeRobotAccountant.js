'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return (number) => {
    return (secondNumber) => {
      callCount++;

      if (callCount > 3 && callCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return number + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
