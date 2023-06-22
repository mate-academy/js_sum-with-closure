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

      switch (true) {
        case (counter < 3):
          return a + b;

        case (counter >= 3 && counter % 2 === 0):
          return 'Bzzz... Error!';

        default:
          return a + b;
      }
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
