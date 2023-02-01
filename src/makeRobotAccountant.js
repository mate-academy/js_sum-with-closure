'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let callCounter = 0;

  return (a) => {
    callCounter++;

    return (b) => {
      return callCounter > 3 && callCounter % 2 === 0
        ? 'Bzzz... Error!'
        : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
