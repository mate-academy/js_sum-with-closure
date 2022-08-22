'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let startCount = 0;

  const getSum = (num1) => {
    return (arg2) => {
      startCount++;

      if (startCount > 3 && startCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num1 + arg2;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
