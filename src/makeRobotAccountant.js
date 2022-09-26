'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  function sum(a) {
    return function(b) {
      counter++;

      if (counter <= 3 || (counter > 3 && counter % 2 !== 0)) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };
  }

  return sum;
}

module.exports = makeRobotAccountant;
