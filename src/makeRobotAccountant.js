'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCounter = 0;

  return (a) => {
    callsCounter++;

    return (b) => callsCounter > 3 && callsCounter % 2 === 0
      ? 'Bzzz... Error!'
      : a + b;
  };
}

module.exports = makeRobotAccountant;
