'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  function getFirstNumber(number1) {
    function getSumOfNumbers(number2) {
      counter++;

      if (counter <= 3 || counter % 2 !== 0) {
        return number1 + number2;
      }

      return 'Bzzz... Error!';
    }

    return getSumOfNumbers;
  }

  return getFirstNumber;
}

module.exports = makeRobotAccountant;
