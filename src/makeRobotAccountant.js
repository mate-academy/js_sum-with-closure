'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  const getSum = (valueA) => (valueB) => {
    callsCount++;

    switch (true) {
      case callsCount < 4:
      case (callsCount >= 4
        && callsCount % 2 === 1):
        return valueA + valueB;
      case callsCount % 2 === 0:
        return 'Bzzz... Error!';
    }
  };

  return getSum;
}

module.exports = makeRobotAccountant;
