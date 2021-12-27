'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (firstNumber) => {
    return (secondNumber) => {
      count++;

      if ((count > 3) && (count % 2 === 0)) {
        return 'Bzzz... Error!';
      }

      return firstNumber + secondNumber;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
