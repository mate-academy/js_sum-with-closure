'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (num1) => {
    return function(num2) {
      count++;

      return (count <= 3 || count % 2 !== 0)
        ? num1 + num2
        : 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
