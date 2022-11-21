'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  const robot = (n) => {
    calls++;

    const condition = (calls > 3) && !(calls % 2);

    return condition
      ? () => 'Bzzz... Error!'
      : (n2) => n + n2;
  };

  return robot;
}

module.exports = makeRobotAccountant;
