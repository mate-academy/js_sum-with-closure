'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return (firsInput) => {
    return (secondInput) => {
      callCount++;

      if (callCount > 3 && callCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firsInput + secondInput;
    };
  };
}

module.exports = makeRobotAccountant;
