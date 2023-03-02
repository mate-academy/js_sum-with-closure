'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let reset = false;
  let counter = 0;

  return function(a) {
    return function(b) {
      counter++;

      if (counter <= 3) {
        return a + b;
      } else {
        reset = !reset;
        counter = 0;

        if (reset) {
          return 'Bzzz... Error!';
        } else {
          return a + b;
        }
      }
    };
  };
}

module.exports = makeRobotAccountant;
