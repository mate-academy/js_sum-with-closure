'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here

  let counterCalls = 0;

  return (a) => {
    return (b) => {
      counterCalls++;

      if (counterCalls <= 3) {
        return a + b;
      }

      return counterCalls % 2 === 0 ? 'Bzzz... Error!' : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
