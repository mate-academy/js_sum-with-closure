'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let i = 0;

  const getSum = (num1) => {
    return function(num2) {
      i++;

      return (i <= 3 || i % 2 !== 0)
        ? num1 + num2
        : 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
