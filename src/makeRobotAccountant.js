'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const firstNumber = (a) => {
    counter++;

    const secondNumber = (b) => {
      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };

    return secondNumber;
  };

  return firstNumber;
}

module.exports = makeRobotAccountant;
