'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const addition = (firstNumber) => {
    const adder = (secondNumber) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNumber + secondNumber;
    };

    return adder;
  };

  return addition;
}

module.exports = makeRobotAccountant;
