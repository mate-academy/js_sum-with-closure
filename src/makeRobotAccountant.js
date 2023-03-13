'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let number = 0;

  return function(x) {
    return function(y) {
      number++;

      if (number % 2 === 0 && number > 3) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
