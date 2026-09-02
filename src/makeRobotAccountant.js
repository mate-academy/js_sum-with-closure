'use strict';

/**
 * @return {function}
 */
function makeRobotAccountant() {
  let calls = 0;

  return function(a) {
    return function(b) {
      calls += 1;

      if (calls > 3 && calls % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
