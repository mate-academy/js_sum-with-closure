'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  const getSum = (num1) => {
    return (num2) => {
      callsCount++;

      if (callsCount > 3 && callsCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
