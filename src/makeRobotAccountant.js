'use strict';

/**
 *
 * @return {function}
 */
function makeRobotAccountant() {
  let operationCount = 0;

  return function sum(a) {
    return function(b) {
      operationCount++;

      if (operationCount <= 3 || operationCount % 2 !== 0) {
        return a + b;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
