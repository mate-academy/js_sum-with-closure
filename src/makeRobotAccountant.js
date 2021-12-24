'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function calculate(x) {
    return function(y) {
      if (count < 3) {
        count++;

        return x + y;
      }

      count--;

      return 'Bzzz... Error!';
    };
  }

  return calculate;
}

module.exports = makeRobotAccountant;
