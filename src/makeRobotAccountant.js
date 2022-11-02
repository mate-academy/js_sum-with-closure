'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  return function(a) {
    return function(b) {
      if (count % 2 === 0 && count !== 0 && count >= 4) {
        count++;

        return `Bzzz... Error!`;
      }
      count++;

      return a + b;
    };
  };
};

module.exports = makeRobotAccountant;
