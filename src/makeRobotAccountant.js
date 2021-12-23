'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (num1) => {
    const sum = (num2) => {
      if (count % 2 === 0 && count >= 3) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };

    count++;

    return sum;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
