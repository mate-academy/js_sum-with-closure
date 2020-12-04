'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 1;

  return function(a) {
    return function(b) {
      if (counter % 2 === 0 && counter > 2) {
        counter++;

        return 'Bzzz... Error!';
      }

      counter++;

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
