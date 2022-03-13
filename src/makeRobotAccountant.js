'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let value = 0;

  return function(x) {
    value++;

    return function(y) {
      if (value > 3 && value % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
