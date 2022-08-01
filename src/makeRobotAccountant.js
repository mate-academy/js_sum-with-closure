'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfCalls = 0;

  return function(a) {
    let result = 0;

    return function(b) {
      countOfCalls++;
      result += a + b;

      if (countOfCalls % 2 === 0 && countOfCalls !== 2) {
        return `Bzzz... Error!`;
      }

      return result;
    };
  };
}

module.exports = makeRobotAccountant;
