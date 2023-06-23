'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCounter = 0;

  const getSum = (x) => (y) => {
    callsCounter++;

    if (callsCounter >= 4 && callsCounter % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return x + y;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
