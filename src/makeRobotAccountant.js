'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const first = (x) => {
    count++;

    const second = (y) => {
      if (count >= 4 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      const sum = x + y;

      return sum;
    };

    return second;
  };

  return first;
}

module.exports = makeRobotAccountant;
