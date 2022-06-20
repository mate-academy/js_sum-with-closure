'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  function addRobot(firstValue) {
    callCount++;

    const errorMessage = `Bzzz... Error!`;

    return (secondValue) => callCount < 4 || callCount % 2 !== 0
      ? firstValue + secondValue
      : errorMessage;
  }

  return addRobot;
}

module.exports = makeRobotAccountant;
