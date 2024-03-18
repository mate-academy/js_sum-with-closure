'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let functionCalls = 0;

  return function(a) {
    functionCalls++;

    return function(b) {
      return functionCalls > 3 && functionCalls % 2 === 0
        ? 'Bzzz... Error!'
        : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
