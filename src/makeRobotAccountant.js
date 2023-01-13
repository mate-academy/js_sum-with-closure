'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let leftCalls = 0;

  const calc = (x) => {
    const sum = (y) => {
      if (leftCalls >= 3) {
        leftCalls--;

        return `Bzzz... Error!`;
      }

      leftCalls++;

      return x + y;
    };

    return sum;
  };

  return calc;
}

module.exports = makeRobotAccountant;
