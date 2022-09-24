'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (a) => {
    count++;

    return (b) => (count % 2 === 0 && count > 3) ? 'Bzzz... Error!' : a + b;
  };
}

module.exports = makeRobotAccountant;
