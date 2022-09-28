'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = (firstNumber) => {
    counter++;

    return (secondNumber) => {
      const shouldWeSum = counter < 3 || counter % 2 !== 0;

      if (shouldWeSum) {
        return firstNumber + secondNumber;
      }

      return 'Bzzz... Error!';
    };
  };

  return getSum;
}
module.exports = makeRobotAccountant;
