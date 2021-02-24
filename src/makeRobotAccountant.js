'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(a) {
    count++;

    if (count >= 4 && (count % 2) === 0) {
      return function() {
        return 'Bzzz... Error!';
      };
    }

    return function(b) {
      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
