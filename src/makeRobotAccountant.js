'use strict';

/**
 *
 * @return {function}
 */
//  few years ago I worked as accountant and it`s really  BORING
function makeRobotAccountant() {
  let callCount = 0;

  return function(a) {
    return function(b) {
      callCount++;

      return callCount > 3 && callCount % 2 === 0
        ? 'Bzzz... Error!'
        : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
