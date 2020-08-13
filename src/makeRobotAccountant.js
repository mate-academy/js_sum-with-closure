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

      if (count < 4) {
        return x + y;
      }

      return (count % 2 === 0) ? 'Bzzz... Error!' : (x + y);
    };
  };
}

module.exports = makeRobotAccountant;
