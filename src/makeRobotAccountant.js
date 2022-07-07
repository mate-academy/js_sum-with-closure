'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let launchCounter = 0;

  const getSum = (x) => {
    return (y) => {
      launchCounter++;

      return launchCounter > 3 && launchCounter % 2 === 0
        ? 'Bzzz... Error!'
        : x + y;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
