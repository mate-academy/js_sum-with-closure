'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  return (y) => {
    return x => {
      calls++;

      return (calls > 3 && calls % 2 === 0) ? 'Bzzz... Error!' : y + x;
    };
  };
}

module.exports = makeRobotAccountant;
