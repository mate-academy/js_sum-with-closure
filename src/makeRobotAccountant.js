'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let amountOfCalls = 0;

  return (a) => {
    return (b) => {
      amountOfCalls++;

      return (amountOfCalls >= 4 && amountOfCalls % 2 === 0)
        ? 'Bzzz... Error!'
        : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
