'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (a) => {
    return (b) => {
      count++;

      return (count > 3 && count % 2 === 0)
        ? 'Bzzz... Error!' : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
