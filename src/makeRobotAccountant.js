'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (x) => {
    return function(y) {
      const sum = x + y;

      count++;

      if ((count > 3) && (count % 2 === 0)) {
        return 'Bzzz... Error!';
      } else
      if ((count > 3) && (count % 2 !== 0)) {
        return sum;
      }

      return sum;
    };
  };

  return getSum;
};

module.exports = makeRobotAccountant;
