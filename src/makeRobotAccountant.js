'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(x) {
    return function(y) {
      count += 1;

      const result = (count > 3 & count % 2 === 0)
        ? `Bzzz... Error!`
        : x + y;

      return result;
    };
  };
}

module.exports = makeRobotAccountant;
