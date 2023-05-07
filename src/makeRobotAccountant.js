'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  let sum = 0;

  const getSum = (a) => {
    return function(b) {
      count++;
      sum = a + b;

      if (count % 2 === 0 && count > 3) {
        return 'Bzzz... Error!';
      };

      return sum;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
