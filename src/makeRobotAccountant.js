'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  return (x) => {
    callsCount++;

    return (y) => {
      return (callsCount > 3 && !(callsCount % 2))
        ? 'Bzzz... Error!'
        : x + y;
    };
  };
}

module.exports = makeRobotAccountant;
