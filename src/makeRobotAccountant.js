'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 3;

  return function(a) {
    return function(b) {
      if (counter === 0) {
        counter = 1;

        return 'Bzzz... Error!';
      }
      counter--;

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
