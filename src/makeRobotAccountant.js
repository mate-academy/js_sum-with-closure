'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;
  const startCalls = 3;

  return (num1) => {
    return (num2) => {
      const sum = num1 + num2;

      callsCount++;

      if (callsCount > startCalls && callsCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
