'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;

  return (a) => {
    countCalls++;

    if ((countCalls - 3) % 2 === 1) {
      return () => `Bzzz... Error!`;
    }

    return (b) => a + b;
  };
}

module.exports = makeRobotAccountant;
