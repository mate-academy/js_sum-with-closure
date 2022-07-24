'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let number = 0;

  return function(x) {
    number++;

    return function(y) {
      if (number > 3 && number % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
