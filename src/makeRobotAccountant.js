'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;
  const getSum = function(y) {
    count++;

    return function(x) {
      if (count > 3 && count % 2) {
        return 'Bzzz... Error!';
      }

      return (x + y);
    };
  };

  return getSum;
}
module.exports = makeRobotAccountant;
