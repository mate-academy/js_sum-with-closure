'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (x) => {
    return (y) => {
      count++;

      if (count > 3) {
        return (count % 2 === 0) ? 'Bzzz... Error!' : x + y;
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
