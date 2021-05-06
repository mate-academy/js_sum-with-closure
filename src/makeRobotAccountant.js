'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 4;

  const firstNum = function(x) {
    if (count === 0) {
      count = 2;
    }

    const secondNum = function(y) {
      count--;

      return count === 0
        ? 'Bzzz... Error!'
        : x + y;
    };

    return secondNum;
  };

  return firstNum;
}

module.exports = makeRobotAccountant;
