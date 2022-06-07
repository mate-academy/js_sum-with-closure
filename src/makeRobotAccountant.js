'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  const sum = (firstNumber) => (secondNumber) => {
    ++counter;

    if (counter > 3 && counter % 2 === 0) {
      return 'Bzzz... Error!';
    } else {
      return firstNumber + secondNumber;
    }
  };

  return sum;
}

module.exports = makeRobotAccountant;
