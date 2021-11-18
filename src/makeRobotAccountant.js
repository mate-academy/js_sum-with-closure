'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function getSum(number1) {
    count++;

    return function(number2) {
      if (count > 3 && !(count % 2)) {
        return 'Bzzz... Error!';
      }

      return number1 + number2;
    };
  };
}

module.exports = makeRobotAccountant;
