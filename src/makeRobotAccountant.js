'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return (arg1) => {
    return (arg2) => {
      callCount++;

      return callCount > 3 && callCount % 2 === 0
        ? 'Bzzz... Error!'
        : arg1 + arg2;
    };
  };
};

module.exports = makeRobotAccountant;
