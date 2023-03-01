'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(x) {
    return function(y) {
      count++;

      if (count % 2 === 0 && count > 3) {
        return `Bzzz... Error!`;
      } else {
        return x + y;
      }
    };
  };
}

module.exports = makeRobotAccountant;
