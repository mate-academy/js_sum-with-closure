'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(a) {
    return function(b) {
      if (count < 3) {
        count++;

        return a + b;
      } else {
        count--;

        return `Bzzz... Error!`;
      }
    };
  };
};

module.exports = makeRobotAccountant;
