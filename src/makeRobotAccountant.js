'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let limit = 3;

  const getSum = function(a) {
    limit--;

    const sum = function(b) {
      return a + b;
    };

    if (limit >= 0 || limit % 2 === 0) {
      return sum;
    };

    const error = function() {
      return 'Bzzz... Error!';
    };

    return error;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
