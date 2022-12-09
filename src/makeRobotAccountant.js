'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  return (a) => {
    return (b) => {
      calls++;

      const sum = a + b;

      if (calls <= 3) {
        return sum;
      }

      if (calls % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
