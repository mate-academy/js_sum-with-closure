'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let robotCounter = 0;

  return function(firstAction) {
    return function(secondAction) {
      robotCounter++;

      return robotCounter > 3 && robotCounter % 2 === 0
        ? 'Bzzz... Error!'
        : firstAction + secondAction;
    };
  };
}

module.exports = makeRobotAccountant;
