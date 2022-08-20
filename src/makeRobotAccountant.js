'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let callsCount = 0;
  const limit = 3;

  const getSum = (x) => {
    return (y) => {
      callsCount++;

      if (callsCount % 2 === 0 && limit < callsCount) {
        return 'Bzzz... Error!';
      };

      return x + y;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
