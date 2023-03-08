'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counts = 0;

  return (x) => (y) => {
    counts++;

    return counts > 3 && counts % 2 === 0
      ? 'Bzzz... Error!'
      : x + y;
  };
};

module.exports = makeRobotAccountant;
