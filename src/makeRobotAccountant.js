'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let i = 0;

  return function(x) {
    return function(y) {
      i++;

      if (i >= 4 && (i % 2 === 0)) {
        return `Bzzz... Error!`;
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
