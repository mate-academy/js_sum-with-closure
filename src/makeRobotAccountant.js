'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  function addRobot(firstValue) {
    callCount++;

    const errorMessage = 'Bzzz... Error!';

    return (secondValue) => {
      if (callCount > 3 && callCount % 2 === 0) {
        return errorMessage;
      }

      return firstValue + secondValue;
    };
  }

  return addRobot;
}

module.exports = makeRobotAccountant;
