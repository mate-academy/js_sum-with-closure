'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function sumOfNumbers(number1) {
    return function(number2) {
      count++;

      if (count % 2 !== 0 || count === 2) {
        return number1 + number2;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };

  return sumOfNumbers;
}

module.exports = makeRobotAccountant;
