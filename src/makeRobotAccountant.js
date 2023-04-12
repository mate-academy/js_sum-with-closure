'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant(arg) {
  let callsCounter = 0;

  const getSum = (a) => {
    callsCounter++;

    if (callsCounter > 3 && callsCounter % 2 === 0) {
      return () => 'Bzzz... Error!';
    }

    return b => a + b;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
