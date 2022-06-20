'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  function addRobot(x) {
    callCount++;

    const errorMessage = `Bzzz... Error!`;

    return (y) => callCount < 4 || callCount % 2 !== 0 ? x + y : errorMessage;
  }

  return addRobot;
}

module.exports = makeRobotAccountant;
