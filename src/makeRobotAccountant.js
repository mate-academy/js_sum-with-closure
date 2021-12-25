'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let limit = 3;

  const getSum = function(a) {
    limit--;

    if (limit >= 0 || limit % 2 === 0) {
      const sum = function(b) {
        return a + b;
      };

      return sum;
    } else {
      const error = function() {
        return 'Bzzz... Error!';
      };

      return error;
    }
  };

  return getSum;
}

module.exports = makeRobotAccountant;
