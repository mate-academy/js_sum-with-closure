'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const sum = (a) => {
    count++;

    return (b) => count > 3 && count % 2 !== 1
      ? 'Bzzz... Error!'
      : a + b;
  };

  return sum;
}

module.exports = makeRobotAccountant;
