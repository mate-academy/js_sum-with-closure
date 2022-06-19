'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  const getSum = (outerValue) => {
    count++;

    return function(innerValue) {
      if (count >= 4 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return innerValue + outerValue;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
