'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  function getSum(a) {
    return function(b) {
      counter++;

      return (counter > 3 && counter % 2 === 0)
        ? 'Bzzz... Error!'
        : a + b;
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
