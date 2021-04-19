'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function(firstInput) {
    return function(secondInput) {
      counter++;

      return counter % 2 === 0 && counter > 3
        ? 'Bzzz... Error!'
        : firstInput + secondInput;
    };
  };
}

module.exports = makeRobotAccountant;
