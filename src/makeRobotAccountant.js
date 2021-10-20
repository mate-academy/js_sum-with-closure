'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(number) {
    return function(digit) {
      count++;

      if (count % 2 === 0 && count > 3) {
        return 'Bzzz... Error!';
      }

      return number + digit;
    };
  };
}

module.exports = makeRobotAccountant;
