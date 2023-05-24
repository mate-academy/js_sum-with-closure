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

      return countCalls <= 3 || countCalls % 2 !== 0
        ? a + b
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
