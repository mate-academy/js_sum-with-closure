'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let calls = 0;

  return function(arg1) {
    return function(arg2) {
      calls++;

      if (calls > 3 && !(calls % 2)) {
        return 'Bzzz... Error!';
      } else {
        return arg1 + arg2;
      }
    };
  };
}

module.exports = makeRobotAccountant;
