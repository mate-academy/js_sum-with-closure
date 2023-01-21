'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const add = (x) => {
    count += 1;

    return (y) => {
      return count > 3 && count % 2 === 0
        ? 'Bzzz... Error!'
        : x + y;
    };
  };

  return add;
}

module.exports = makeRobotAccountant;
