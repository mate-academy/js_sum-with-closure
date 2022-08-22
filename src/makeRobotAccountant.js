'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 3;

  return (a) => {
    return (b) => {
      count--;

      if (count < 0 && Math.abs(count) % 2 !== 0) {
        return `Bzzz... Error!`;
      };

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
