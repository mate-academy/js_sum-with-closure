'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstNumber) => {
    counter++;

    const isError = counter > 3 && counter % 2 === 0;

    return (secondNuNumber) => {
      if (isError) {
        return 'Bzzz... Error!';
      }

      return firstNumber + secondNuNumber;
    };
  };
}

module.exports = makeRobotAccountant;
