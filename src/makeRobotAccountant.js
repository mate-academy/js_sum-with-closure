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

      return counterCalls % 2 === 0 && counterCalls >= 3
        ? 'Bzzz... Error!'
        : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
