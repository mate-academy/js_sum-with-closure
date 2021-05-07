'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (x) => {
    count++;

    return function(y) {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
