'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const bzzOrNotToBzz = (firstNumber) => {
    const helperFunction = (secondNumber) => {
      const sum = firstNumber + secondNumber;

      counter++;

      return counter >= 4 && counter % 2 === 0
        ? 'Bzzz... Error!'
        : sum;
    };

    return helperFunction;
  };

  return bzzOrNotToBzz;
}

module.exports = makeRobotAccountant;
