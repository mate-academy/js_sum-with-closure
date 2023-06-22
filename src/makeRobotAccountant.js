'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCounter = 0;

  const getSum = (x) => {
    callsCounter++;

    if (callsCounter >= 4 && callsCounter % 2 === 0) {
      return () => 'Bzzz... Error!';
    }

    return (y) => x + y;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
