'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return (a) => {
    return (b) => {
      callCount++;

      return (callCount > 3 && callCount % 2 === 0) ? 'Bzzz... Error!' : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
