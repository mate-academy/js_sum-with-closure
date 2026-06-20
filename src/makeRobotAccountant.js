'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;
  const errorMessage = 'Bzzz... Error!';

  return function(a) {
    return function(b) {
      count++;

      const warmUp = count <= 3;
      const isError = count % 2 === 0;

      if (warmUp) {
        return a + b;
      }

      if (isError) {
        return errorMessage;
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
