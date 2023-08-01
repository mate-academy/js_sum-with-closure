'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  function sum(a, b) {
    return a + b;
  }

  function error() {
    return 'Bzzz... Error!';
  }

  return function getSum(a) {
    callCount++;

    if (callCount < 3) {
      return function(b) {
        return sum(a, b);
      };
    } else if (callCount % 2 === 0) {
      return function(b) {
        return sum(a, b);
      };
    } else {
      return error;
    }
  };
}

module.exports = makeRobotAccountant;
