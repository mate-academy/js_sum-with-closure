'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = function(num1) {
    count++;

    return function(num2) {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };
  };

  return getSum;
};

module.exports = makeRobotAccountant;
