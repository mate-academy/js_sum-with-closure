'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (a) => (b) => {
    if (count === 3) {
      count--;

      return `Bzzz... Error!`;
    } else {
      count++;

      return a + b;
    }
  };
}

module.exports = makeRobotAccountant;
