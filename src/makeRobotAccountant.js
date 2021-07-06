'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  const getSum = (valueA) => (valueB) => {
    callsCount++;

    if (callsCount % 2 === 0 && callsCount > 3) {
      return 'Bzzz... Error!';
    } else {
      return valueA + valueB;
    }
  };

  return getSum;
}

module.exports = makeRobotAccountant;
