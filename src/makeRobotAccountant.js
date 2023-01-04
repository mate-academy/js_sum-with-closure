'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (x) => {
    return (y) => {
      counter++;

      return counter % 2 === 0 && counter !== 2
        ? 'Bzzz... Error!'
        : x + y;
    };
  };
}

module.exports = makeRobotAccountant;
