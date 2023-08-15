'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function getSum(a) {
    count++;

    return function(b) {
      if (count >= 4 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
};

module.exports = makeRobotAccountant;
