'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return firstNumber => {
    counter++;

    if (counter >= 4 && counter % 2 === 0) {
      return () => {
        return 'Bzzz... Error!';
      };
    }

    return secondNumber => {
      return firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
