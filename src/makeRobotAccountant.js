'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let firstCount = 0;
  let secondCount = 1;

  const getSum = (firstNum) => {
    const result = (secondNum) => {
      if (firstCount < 3) {
        firstCount++;

        return firstNum + secondNum;
      }

      if (secondCount === 0) {
        secondCount++;

        return firstNum + secondNum;
      }

      if (secondCount === 1) {
        secondCount--;

        return 'Bzzz... Error!';
      }
    };

    return result;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
