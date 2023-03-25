'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(number) {
    return function(argument) {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return argument + number;
    };
  };
}

module.exports = makeRobotAccountant;
