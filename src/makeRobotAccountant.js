'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const result = function(x) {
    return function(y) {
      count++;

      if (count < 3 || count % 2 !== 0) {
        return x + y;
      }

      return 'Bzzz... Error!';
    };
  };

  return result;
}

module.exports = makeRobotAccountant;
