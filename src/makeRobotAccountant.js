'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCounter = 0;

  const getSum = a => {
    callsCounter++;

    return b => callsCounter <= 3 || callsCounter % 2 !== 0
      ? a + b
      : 'Bzzz... Error!';
  };

  return getSum;
}

module.exports = makeRobotAccountant;
