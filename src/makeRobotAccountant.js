'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  const innerFunction = function(y) {
    return function(x) {
      calls++;

      if (calls <= 3 || calls % 2 !== 0) {
        return x + y;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };

  return function(x) {
    return innerFunction(x);
  };
}

module.exports = makeRobotAccountant;
