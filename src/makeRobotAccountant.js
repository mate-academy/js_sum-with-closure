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
      if (count < 3 || count % 2 !== 0) {
        return a + b;
      } else {
        return 'Bzzz... Error!';
      };
    };
  };
}

module.exports = makeRobotAccountant;
