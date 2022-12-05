'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  return (n) => {
    calls++;

    const condition = (calls > 3) && !(calls % 2);

    return (n2) => condition
      ? 'Bzzz... Error!'
      : n + n2;
  };
}

module.exports = makeRobotAccountant;
