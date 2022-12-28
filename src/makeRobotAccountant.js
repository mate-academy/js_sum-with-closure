'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const sum = function(x) {
    return function(y) {
      count += 1;

      if (count >= 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return x + y;
      }
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
