'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let callCounter = 0;

  const getSum = (a) => {
    const addNumber = (b) => {
      return callCounter > 3 && callCounter % 2 === 0
        ? 'Bzzz... Error!'
        : a + b;
    };

    callCounter++;

    return addNumber;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
