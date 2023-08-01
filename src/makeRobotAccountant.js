'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  function add(a, b) {
    return a + b;
  }

  function errorMessage() {
    return 'Bzzz... Error!';
  }

  return function getSum(a) {
    if (callCount < 3) {
      return function(b) {
        callCount++;

        return add(a, b);
      };
    } else if (callCount % 2 === 0) {
      callCount++;

      return function(b) {
        return add(a, b);
      };
    } else {
      callCount++;
      
      return errorMessage;
    }
  };
}

module.exports = makeRobotAccountant;
