'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const accountantRobot = (x) => {
    return (y) => {
      counter++;

      return counter > 3 && counter % 2 === 0
        ? 'Bzzz... Error!'
        : x + y;
    };
  };

  return accountantRobot;
}

module.exports = makeRobotAccountant;
