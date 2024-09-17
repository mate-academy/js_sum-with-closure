'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  function getSum(number1) {
    counter++;

    return function(number2) {
      if (counter % 2 === 0 && counter > 3) {
        return 'Bzzz... Error!';
      }

      return number1 + number2;
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
