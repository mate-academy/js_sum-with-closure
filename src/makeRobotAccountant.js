'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let i = 0;

  return (a) => {
    return (b) => {
      i++;

      return i > 3 && i % 2 === 0 ? 'Bzzz... Error!' : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
