'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  return (x) => (y) => {
    counter++;

    return (counter > 3 && counter % 2 === 0)
      ? 'Bzzz... Error!'
      : x + y;
  };
}

module.exports = makeRobotAccountant;
