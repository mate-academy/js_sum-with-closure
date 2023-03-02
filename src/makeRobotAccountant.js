'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sums = 0;

  return (x) => (y) => {
    sums++;

    return sums > 2 && sums % 2 === 0
      ? 'Bzzz... Error!'
      : x + y;
  };
};

module.exports = makeRobotAccountant;
