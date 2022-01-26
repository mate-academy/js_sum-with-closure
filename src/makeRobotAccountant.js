'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let operationCount = 0;

  return (num1) => {
    return (num2) => {
      operationCount++;

      if (operationCount <= 3 || operationCount % 2 === 1) {
        return num1 + num2;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
