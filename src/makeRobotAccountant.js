'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const sum = (x) => {
    return (y) => {
      count++;

      return count > 3 && count % 2 !== 1 ? 'Bzzz... Error!' : x + y;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
