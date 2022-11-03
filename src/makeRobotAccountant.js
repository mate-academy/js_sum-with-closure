'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calc = 0;

  return function(x) {
    return function(y) {
      calc++;

      if (calc >= 4 && calc % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
