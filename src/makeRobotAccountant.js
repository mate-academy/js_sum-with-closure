'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = (firstNumber) => {
    return (secondNumber) => {
      counter++;

      if (counter === 2 || counter % 2 !== 0) {
        return firstNumber + secondNumber;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };

  return getSum;
}
module.exports = makeRobotAccountant;
