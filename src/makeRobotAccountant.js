'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const sum = (firstNumber) => {
    count++;

    return (secondNumber) => {
      if (count < 3 || count % 2 !== 0) {
        return firstNumber + secondNumber;
      }

      return 'Bzzz... Error!';
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
