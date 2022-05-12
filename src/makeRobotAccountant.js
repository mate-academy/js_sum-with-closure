'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (firstValue) => {
    const sum = (secondValue) => {
      count++;

      if (count <= 3) {
        return firstValue + secondValue;
      }

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return firstValue + secondValue;
      }
    };

    return sum;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
