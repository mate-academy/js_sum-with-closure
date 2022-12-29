'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (y) => {
    count++;

    return (x) => count > 3 && count % 2 === 0
      ? 'Bzzz... Error!'
      : x + y;
  };
}

module.exports = makeRobotAccountant;
