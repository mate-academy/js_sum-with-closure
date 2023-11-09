'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;

  return function(x) {
    return function(y) {
      const summ = x + y;

      countCalls++;

      if (countCalls > 3 && countCalls % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return summ;
    };
  };
}

module.exports = makeRobotAccountant;
