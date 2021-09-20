'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  return a => b => {
    calls++;

    return (calls > 3 && calls % 2 === 0) ? 'Bzzz... Error!' : a + b;
  };
};

module.exports = makeRobotAccountant;
