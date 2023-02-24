'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCounter = 0;

  return (a) => {
    return (b) => {
      callsCounter++;

      return (callsCounter % 2 === 0 && callsCounter > 3)
        ? 'Bzzz... Error!'
        : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
