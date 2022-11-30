'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return (x) => {
    return (y) => {
      count++;

      if (count > 3) {
        return count % 2 !== 0 ? x + y : `Bzzz... Error!`;
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
