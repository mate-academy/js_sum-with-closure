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
      return count < 4 ? x + y : (count % 2 === 0 ? 'Bzzz... Error!' : x + y);
    };
  };
}

module.exports = makeRobotAccountant;
