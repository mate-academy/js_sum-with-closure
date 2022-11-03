'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here

  let counterCalls = 0;

  return a => {
    return b => {
      counterCalls++;

      if (counterCalls <= 3) {
        return a + b;
      }

      if (counterCalls % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
