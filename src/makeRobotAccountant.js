'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const firstStatus = (x) => {
    count++;

    const secondStatus = (y) => {
      if (count >= 4 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      const sum = x + y;

      return sum;
    };

    return secondStatus;
  };

  return firstStatus;
}

module.exports = makeRobotAccountant;
