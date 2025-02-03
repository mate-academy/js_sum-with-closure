'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let buzzer = 0;

  return function(a) {
    return function(b) {
      if (buzzer > 2) {
        buzzer--;

        return 'Bzzz... Error!';
      }

      buzzer++;

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
