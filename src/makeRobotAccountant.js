'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;
  const sum = (a) => (b) => {
    counter++;

    return counter > 3 && counter % 2 === 0
      ? 'Bzzz... Error!'
      : a + b;
  };

  return sum;
}

module.exports = makeRobotAccountant;
