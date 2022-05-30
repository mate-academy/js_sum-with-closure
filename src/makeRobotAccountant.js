'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function(a) {
    counter++;

    return function(b) {
      if (counter <= 3 || (counter % 2 !== 0)) {
        const sum = a + b;

        return sum;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
