'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (number) => {
    count++;

    const secondArgument = (secondNumber) => {
      const sum = number + secondNumber;

      if (count <= 3 || count % 2 !== 0) {
        return sum;
      } else {
        return 'Bzzz... Error!';
      }
    };

    return secondArgument;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
