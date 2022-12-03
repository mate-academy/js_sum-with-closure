'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(number1) {
    count++;

    return function(number2) {
      if (count < 4 || count % 2 !== 0) {
        return number1 + number2;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
