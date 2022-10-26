'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  return (firstNumber) => {
    return (secondNumber) => {
      if (count <= 3 || count % 2 === 1) {
        count++;

        return firstNumber + secondNumber;
      } else {
        count++;

        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
