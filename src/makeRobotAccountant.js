'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (firstValue) => {
    return (secondValue) => {
      const result = firstValue + secondValue;

      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return result;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
