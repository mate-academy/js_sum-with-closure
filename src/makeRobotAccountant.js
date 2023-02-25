'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const sums = [];

  return (x) => {
    return (y) => {
      const sum = x + y;

      sums.push(sum);

      return sums.length > 2 && sums.length % 2 === 0 ? 'Bzzz... Error!' : sum;
    };
  };
}

module.exports = makeRobotAccountant;
