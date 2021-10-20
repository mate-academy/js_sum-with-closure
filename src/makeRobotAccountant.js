'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (x) => {
    count++;

    return (y) => {
      if (count < 4) {
        return x + y;
      } else {
        return count % 2 === 0 ? 'Bzzz... Error!' : x + y;
      }
    };
  };
}

module.exports = makeRobotAccountant;
