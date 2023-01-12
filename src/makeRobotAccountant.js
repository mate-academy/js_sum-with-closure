'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let leftCalls = 3;

  const calc = (x) => {
    const sum = (y) => {
      if (leftCalls <= 0) {
        leftCalls += 1;

        return `Bzzz... Error!`;
      }

      leftCalls -= 1;

      return x + y;
    };

    return sum;
  };

  return calc;
}

module.exports = makeRobotAccountant;
