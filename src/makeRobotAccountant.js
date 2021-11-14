'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 3;
  let evenCount = 0;

  const getSum = (num1) => {
    const adding = (num2) => {
      count--;

      if (count < 0 && evenCount % 2 === 0) {
        evenCount++;

        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };

    return adding;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
