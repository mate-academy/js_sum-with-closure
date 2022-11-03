'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  function getSum(x) {
    return function(y) {
      counter++;

      return counter < 3 || counter % 2 !== 0
        ? (x + y)
        : 'Bzzz... Error!';
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
