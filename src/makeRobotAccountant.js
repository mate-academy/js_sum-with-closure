'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let operationCount = 0;

  const getSum = (x) => {
    return function(y) {
      operationCount++;

      if (operationCount < 3 || operationCount % 2 !== 0) {
        return x + y;
      }

      return 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
