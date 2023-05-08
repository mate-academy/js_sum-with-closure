'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  const getSum = (firstNumber) => (secondNumber) => {
    callCount++;

    if (callCount > 3 && callCount % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return firstNumber + secondNumber;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
