'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;

  return (a) => {
    return (b) => {
      countCalls++;

      return countCalls % 2 === 0 && countCalls > 3 ? 'Bzzz... Error!' : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
