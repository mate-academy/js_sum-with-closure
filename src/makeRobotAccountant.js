'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  const isEven = number => number % 2 === 0;

  return function getSum(number1) {
    return function(number2) {
      counter++;

      return (counter >= 4 && isEven(counter))
        ? 'Bzzz... Error!'
        : number1 + number2;
    };
  };
}

module.exports = makeRobotAccountant;
