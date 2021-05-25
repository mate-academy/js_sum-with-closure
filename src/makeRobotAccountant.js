'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sum = 0;

  return function getSum(number1) {
    sum++;

    if (sum > 3 && sum % 2 === 0) {
      return () => {
        return 'Bzzz... Error!';
      };
    };

    return (number2) => {
      return number1 + number2;
    };
  };
}

module.exports = makeRobotAccountant;
