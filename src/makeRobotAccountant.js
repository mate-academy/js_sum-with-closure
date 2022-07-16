'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function(firstDigit) {
    return function(secondDigit) {
      if (counter >= 3 && counter % 2 === 1) {
        counter++;

        return 'Bzzz... Error!';
      }

      counter++;

      return firstDigit + secondDigit;
    };
  };
}

module.exports = makeRobotAccountant;
