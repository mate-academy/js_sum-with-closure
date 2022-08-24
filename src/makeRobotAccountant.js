'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(a) {
    count++;

    return function(b) {
      if (count < 4 || count % 2) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };
  };
};

module.exports = makeRobotAccountant;
