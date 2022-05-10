'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callNumber = 0;

  const getSum = (number1) => {
    const secondAdd = (number2) => {
      callNumber++;

      return ((callNumber >= 4) && (callNumber % 2 === 0))
        ? 'Bzzz... Error!'
        : number1 + number2;
    };

    return secondAdd;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
