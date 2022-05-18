'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstArg) => (secondArg) => {
    count++;

    return (count > 3 && count % 2 === 0)
      ? 'Bzzz... Error!'
      : firstArg + secondArg;
  };
}

module.exports = makeRobotAccountant;
