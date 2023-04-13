'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(x) {
    return function(y) {
      count++;

      if (count < 3 || count % 2 !== 0) {
        return x + y;
      } else {
        return 'Bzzz... Error!';
      };
    };
  };
}

module.exports = makeRobotAccountant;
