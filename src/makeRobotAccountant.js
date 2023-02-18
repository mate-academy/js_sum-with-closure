'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let callCounter = 4;

  const getSum = (a) => {
    const addNumber = (b) => {
      return callCounter > 0 || callCounter % 2 !== 0
        ? a + b
        : 'Bzzz... Error!';
    };

    callCounter--;

    return addNumber;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
