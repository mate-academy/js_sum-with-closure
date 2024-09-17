'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 1;

  return function(firstArg) {
    return function(secondArg) {
      countCalls++;

      if (countCalls > 3 && countCalls % 2 === 1) {
        return 'Bzzz... Error!';
      }

      return firstArg + secondArg;
    };
  };
}

module.exports = makeRobotAccountant;
