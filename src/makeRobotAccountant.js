'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  const getSum = (firstValue) => {
    count++;

    return function(secondValue) {
      if (count > 3 && (count % 2) === 0) {
        return 'Bzzz... Error!';
      }

      return firstValue + secondValue;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
