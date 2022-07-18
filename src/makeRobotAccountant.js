'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let iterateCount = 0;

  return function getSum(y) {
    return (x) => {
      iterateCount++;

      return iterateCount > 3 && iterateCount % 2 === 0
        ? 'Bzzz... Error!'
        : x + y;
    };
  };
}

module.exports = makeRobotAccountant;
