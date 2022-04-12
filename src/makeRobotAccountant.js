'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (x) => {
    counter++;

    return (y) =>
      (counter % 2 === 0 && counter >= 3) ? 'Bzzz... Error!' : x + y;
  };
}

module.exports = makeRobotAccountant;
