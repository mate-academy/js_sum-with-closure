'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let startCount = 0;

  return (num1) => {
    return (num2) => {
      startCount++;

      if (startCount > 3 && startCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };
  };
}

module.exports = makeRobotAccountant;
