'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  const getSum1 = function(num1) {
    count += 1;

    const getSum2 = function(num2) {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };

    return getSum2;
  };

  return getSum1;
}

module.exports = makeRobotAccountant;
