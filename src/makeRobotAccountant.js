'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return (firstCall) => {
    count++;

    return (secondCall) =>
      (count % 2 === 0 && count >= 3)
        ? 'Bzzz... Error!'
        : firstCall + secondCall;
  };
}

module.exports = makeRobotAccountant;
