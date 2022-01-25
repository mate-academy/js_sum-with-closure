'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let callsCount = 0;

  return function(numA) {
    return function(numB) {
      callsCount++;

      return (callsCount > 3 && callsCount % 2 === 0)
        ? 'Bzzz... Error!'
        : numA + numB;
    };
  };
}

module.exports = makeRobotAccountant;
