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
      return count < 3 || count % 2 !== 0 ? a + b : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
