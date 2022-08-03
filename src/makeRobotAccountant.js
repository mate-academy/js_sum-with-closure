'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfCalls = 0;

  return function(a) {
    return function(b) {
      countOfCalls++;

      if (countOfCalls % 2 === 0 && countOfCalls !== 2) {
        return `Bzzz... Error!`;
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
