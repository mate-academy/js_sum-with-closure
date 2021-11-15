'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 3;

  const getSum = (num1) => {
    const adding = (num2) => {
      count--;

      if (count < 0 && count % 2 !== 0) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };

    return adding;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
