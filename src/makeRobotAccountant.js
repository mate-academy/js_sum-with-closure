'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const bzzOrNotToBzz = (firstNumber) => {
    const helperFunction = (secondNumber) => {
      const sum = firstNumber + secondNumber;

      count++;

      if (count >= 4 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return sum;
    };

    return helperFunction;
  };

  return bzzOrNotToBzz;
}

module.exports = makeRobotAccountant;
