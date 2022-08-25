'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let itterationCount = 0;

  return (robotNumber1) => {
    itterationCount++;

    return (robotNumber2) => (itterationCount % 2 || itterationCount < 4)
      ? robotNumber1 + robotNumber2
      : 'Bzzz... Error!';
  };
}

module.exports = makeRobotAccountant;
