'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstNumber) => (secondNumber) => {
    count += 1;

    if (count > 3 && count % 2 === 0) {
      return 'Bzzz... Error!';
    } else {
      return firstNumber + secondNumber;
    }
  };
}

module.exports = makeRobotAccountant;
