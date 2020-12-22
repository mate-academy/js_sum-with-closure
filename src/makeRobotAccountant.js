'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;

  return function(firstArg) {
    return function(secondArg) {
      if (countCalls >= 3 && countCalls % 2 === 1) {
        countCalls++;

        return 'Bzzz... Error!';
      } else {
        countCalls++;

        return firstArg + secondArg;
      }
    };
  };
}

module.exports = makeRobotAccountant;
