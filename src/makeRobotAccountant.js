'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let attemps = 0;

  const getSum = (x) => {
    attemps++;

    return function(y) {
      if (attemps > 3 && attemps % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return x + y;
    }
  }

  return getSum;
}

module.exports = makeRobotAccountant;
