'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const first = (a) => {
    const second = (b) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return a + b;
    };

    return second;
  };

  return first;
}

module.exports = makeRobotAccountant;
