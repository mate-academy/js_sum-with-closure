'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sum = 0;
  let isEven = 0;

  return function getSum(num1) {
    // debugger;
    isEven++;
    sum++;

    if (isEven > 3 && isEven % 2 === 0) {
      return () => {
        return 'Bzzz... Error!';
      };
    };

    return (num2) => {
      sum = num1 + num2;

      return sum;
    };
  };
};

module.exports = makeRobotAccountant;
