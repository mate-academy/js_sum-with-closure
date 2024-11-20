'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;
  const result = function getSum(a) {
    return function(b) {
      count++;

      const number = count % 2;

      if (count > 3 && number === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };

  return result;
}

module.exports = makeRobotAccountant;
