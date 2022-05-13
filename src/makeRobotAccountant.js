'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (firstNum) => {
    count++;

    const secondSum = (secondNum) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNum + secondNum;
    };

    return secondSum;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
