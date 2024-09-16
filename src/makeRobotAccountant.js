'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return (firstNum) => {
    callCount++;

    return (secondNum) => {
      if (callCount > 3 && callCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNum + secondNum;
    };
  };
}

module.exports = makeRobotAccountant;
