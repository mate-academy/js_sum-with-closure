'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (num1 = 0) => {
    const sum = (num2 = 0) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return (num1 + num2);
    };

    return sum;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
