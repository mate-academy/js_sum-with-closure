'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function first(x) {
    return function second(y) {
      const result = x + y;

      count += 1;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return result;
    };
  };
}

module.exports = makeRobotAccountant;
