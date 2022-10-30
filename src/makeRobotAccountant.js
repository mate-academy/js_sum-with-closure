'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(a) {
    return b => {
      count++;

      if (count % 2 === 0 && count !== 2) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
