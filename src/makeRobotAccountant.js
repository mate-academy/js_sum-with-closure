'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 1;

  return a => {
    return b => {
      const totalCalls = calls;

      if (totalCalls > 3 && (totalCalls % 2 === 0)) {
        calls++;

        return 'Bzzz... Error!';
      }
      calls++;

      return a + b;
    };
  };
};

module.exports = makeRobotAccountant;
