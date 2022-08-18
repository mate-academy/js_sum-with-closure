'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let cicleCounter = 0;

  function getSum(x) {
    cicleCounter++;

    return (y) => {
      return cicleCounter > 3 && cicleCounter % 2 === 0
        ? 'Bzzz... Error!'
        : x + y;
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
