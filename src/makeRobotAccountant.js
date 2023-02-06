'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sum = 0;

  return (x) => {
    return (y) => {
      sum++;

      if (sum % 2 === 0 && sum > 3) {
        return `Bzzz... Error!`;
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
