'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (a) => {
    return (b) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
