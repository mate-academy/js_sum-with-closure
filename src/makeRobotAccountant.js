'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  return x => {
    count++;

    return y => (count > 3 && count % 2 !== 0) ? 'Bzzz... Error!' : x + y;
  };
}

module.exports = makeRobotAccountant;
