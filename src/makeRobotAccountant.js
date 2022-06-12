'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let call = 0;

  return function(x) {
    call++;

    return function(y) {
      if (call <= 3 || call % 2 !== 0) {
        return x + y;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
