'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const sums = [];

  return (x) => (y) => {
    sums.push(x + y);

    return sums.length > 2
    && sums.length % 2 === 0
      ? 'Bzzz... Error!'
      : x + y;
  };
};

module.exports = makeRobotAccountant;
