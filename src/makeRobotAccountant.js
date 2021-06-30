'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  const getSum = (firstNumber) => {
    return (secondNumber) => {
      if (count < 3 || count % 2 !== 0) {
        count++;

        return firstNumber + secondNumber;
      } else {
        count++;

        return 'Bzzz... Error!';
      }
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
