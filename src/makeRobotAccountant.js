'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCounter = 0;
  const maxCalls = 3;

  return function(a) {
    return function(b) {
      callsCounter++;

      return (callsCounter > maxCalls) && (callsCounter % 2 === 0)
        ? 'Bzzz... Error!'
        : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
