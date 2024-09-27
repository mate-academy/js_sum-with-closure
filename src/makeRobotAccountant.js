'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (first) => {
    return (second) => {
      count++;

      return (count > 3 && count % 2 === 0)
        ? 'Bzzz... Error!'
        : first + second;
    };
  };
}

module.exports = makeRobotAccountant;
