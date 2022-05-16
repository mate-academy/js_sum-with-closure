'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (first) => {
    count++;

    return (second) =>
      (count >= 3 && count % 2 === 0)
        ? 'Bzzz... Error!'
        : first + second;
  };
}

module.exports = makeRobotAccountant;
