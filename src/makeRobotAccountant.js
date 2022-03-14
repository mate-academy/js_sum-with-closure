'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let num = 0;

  return function(x) {
    return function(y) {
      num++;

      if (num <= 3 || (num % 2) === 1) {
        return x + y;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
