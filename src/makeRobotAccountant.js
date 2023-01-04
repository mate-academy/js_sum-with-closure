'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let numbersSum = 0;
  let countCalls = 0;

  const getSum = (firstNumber) => {
    countCalls++;

    return (secondNumber) => {
      if (countCalls > 3 && countCalls % 2 === 0) {
        return 'Bzzz... Error!';
      }

      numbersSum = firstNumber + secondNumber;

      return numbersSum;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
