'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  const getOneNumber = (oneValue) => {
    const getSum = (twoValue) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return oneValue + twoValue;
    };

    return getSum;
  };

  return getOneNumber;
}

module.exports = makeRobotAccountant;
