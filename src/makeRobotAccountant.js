'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (firstNum) => {
    const sum = (secondNum) => {
      count++;

      const total = firstNum + secondNum;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return total;
      }
    };

    return sum;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
