'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return function(number1) {
    count++;

    return function(number2) {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return number1 + number2;
    };
  };
}

module.exports = makeRobotAccountant;
