'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  const getSum = (param1) => {
    const getSum2 = (param2) => {
      callsCount++;

      const sum = param2 + param1;

      if (callsCount > 3 && callsCount % 2 === 0) {
        return 'Bzzz... Error!';
      };

      return sum;
    };

    return getSum2;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
