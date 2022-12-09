'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calledCount = 0;

  return (a = 0) => (b = 0) => {
    calledCount++;

    return calledCount % 2 === 0 && calledCount > 3
      ? 'Bzzz... Error!'
      : a + b;
  };
}

module.exports = makeRobotAccountant;
