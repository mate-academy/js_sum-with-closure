'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function(num1) {
    return function(num2) {
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };
  };
}

module.exports = makeRobotAccountant;
