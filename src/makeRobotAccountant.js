'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  return (a) => {
    calls++;

    if (calls >= 3 && calls % 2 === 0) {
      return () => 'Bzzz... Error!';
    }

    return (b) => a + b;
  };
}

module.exports = makeRobotAccountant;
