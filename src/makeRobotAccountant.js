'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sum = 0;

  return function getSum(num1) {
    sum++;

    if (sum > 3 && sum % 2 === 0) {
      return () => {
        return 'Bzzz... Error!';
      };
    };

    return (num2) => {
      return num1 + num2;
    };
  };
};

module.exports = makeRobotAccountant;
