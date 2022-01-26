'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let operationCount = 0;

  return (a) => {
    return (b) => {
      operationCount++;

      if (operationCount <= 3 || operationCount % 2 === 1) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
