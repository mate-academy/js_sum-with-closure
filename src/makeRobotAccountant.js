'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  const maxCalls = 3;

  return (x) => {
    counter++;

    return (counter > maxCalls && !(counter % 2)
      ? () => 'Bzzz... Error!'
      : (y) => x + y);
  };
}

module.exports = makeRobotAccountant;
