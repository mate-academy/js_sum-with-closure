'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let totalCalls = 0;

  return (a) => {
    return (b) => {
      totalCalls++;

      if (totalCalls > 3 && totalCalls % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
