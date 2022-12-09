'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(a) {
    count++;

    return function(b) {
      const sum = a + b;

      if (count > 3 && count % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
