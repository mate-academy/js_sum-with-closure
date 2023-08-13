'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return (a) => {
    callCount++;

    return (b) => callCount % 2 === 0 && callCount > 3
      ? 'Bzzz... Error!'
      : a + b;
  };
}

module.exports = makeRobotAccountant;
