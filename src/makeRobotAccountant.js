'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return (a) => {
    return (b) => {
      count++;

      return count >= 4 && count % 2 === 0
        ? 'Bzzz... Error!'
        : a + b;
    };
  };
};

module.exports = makeRobotAccountant;
