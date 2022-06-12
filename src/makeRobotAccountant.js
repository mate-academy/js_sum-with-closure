'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsLimit = 3;

  return function(a) {
    return function(b) {
      if (callsLimit <= 0 && callsLimit % 2 === 0) {
        callsLimit--;

        return 'Bzzz... Error!';
      }

      callsLimit--;

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
