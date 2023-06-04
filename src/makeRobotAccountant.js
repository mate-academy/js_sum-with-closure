'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  let result;

  const getSum = function(a) {
    return function(b) {
      count++;
      result = a + b;

      if (count <= 3 || count % 2 !== 0) {
        return result;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
