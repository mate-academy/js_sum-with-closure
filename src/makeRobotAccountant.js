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
      if (count < 4) {
        return number1 + number2;
      } else {
        count = 0;

        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
