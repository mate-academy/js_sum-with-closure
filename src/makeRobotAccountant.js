'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return (a) => {
    callCount++;

    return (b) => {
      return (callCount > 3 && callCount % 2 === 0)
        ? 'Bzzz... Error!'
        : a + b;
    };
  };
};

module.exports = makeRobotAccountant;
