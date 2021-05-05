'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (n) => (n2) => {
    counter++;

    return counter % 2 === 0 && counter > 3
      ? 'Bzzz... Error!'
      : n + n2;
  };
}

module.exports = makeRobotAccountant;
