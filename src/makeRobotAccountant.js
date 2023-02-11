'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;

  return a => {
    return b => {
      countCalls++;

      if (countCalls <= 3 || countCalls % 2 !== 0) {
        return a + b;
      }

      return `Bzzz... Error!`;
    };
  };
}

module.exports = makeRobotAccountant;
