'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(first) {
    count++;

    return function(second) {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return first + second;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
