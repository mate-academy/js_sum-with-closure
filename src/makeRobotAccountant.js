'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 1;

  function getSum(x) {
    return function(y) {
      counter++;

      if (counter > 3) {
        return counter % 2 === 0
          ? x + y
          : 'Bzzz... Error!';
      }

      return x + y;
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
