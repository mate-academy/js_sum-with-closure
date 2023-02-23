'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstNumber) => (secondNumber) => {
    count++;

    if (count % 2 === 0 && count > 3) {
      return 'Bzzz... Error!';
    }

    return firstNumber + secondNumber;
  };
}

module.exports = makeRobotAccountant;
