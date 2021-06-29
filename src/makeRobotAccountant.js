'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 1;
  const getSum = (left) => {
    return (right) => {
      if ((callsCount <= 3) || ((callsCount % 2) !== 0)) {
        callsCount++;

        return left + right;
      }

      callsCount++;

      return 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
