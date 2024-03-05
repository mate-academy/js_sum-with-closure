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

      if (count % 2 === 0 && count > 3) {
        return `Bzzz... Error!`;
      } else {
        return a + b;
      }
    };
  };
}

module.exports = makeRobotAccountant;
