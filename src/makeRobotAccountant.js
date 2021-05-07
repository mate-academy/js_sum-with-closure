'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const firstNumber = function(num) {
    const secondNumber = function(num2) {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num2 + num;
    };

    return secondNumber;
  };

  return firstNumber;
}

module.exports = makeRobotAccountant;
