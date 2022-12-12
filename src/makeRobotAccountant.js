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

      return (counter > 3 && counter % 2 === 0)
        ? 'Bzzz... Error!'
        : x + y;
    };
  };
}

module.exports = makeRobotAccountant;
