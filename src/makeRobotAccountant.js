'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;

  return function(n) {
    return function(k) {
      countCalls++;

      if (countCalls > 3 && countCalls % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return n + k;
    };
  };
}

module.exports = makeRobotAccountant;
