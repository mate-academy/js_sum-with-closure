'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(firstArgument) {
    return function(secondArgument) {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstArgument + secondArgument;
    };
  };
}

module.exports = makeRobotAccountant;
