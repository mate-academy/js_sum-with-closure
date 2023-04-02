'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let i = 0;

  return function(x) {
    return function(y) {
      i++;

      if (i <= 3) {
        return x + y;
      } else if (i % 2 !== 0) {
        return x + y;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
