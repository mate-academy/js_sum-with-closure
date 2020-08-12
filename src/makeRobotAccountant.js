'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(y) {
    count++;

    if (count >= 4 && count % 2 === 0) {
      return () => `Bzzz... Error!`;
    }

    return function(x) {
      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
