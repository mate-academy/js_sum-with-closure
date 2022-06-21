'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(firstInt) {
    return function(secondInt) {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return firstInt + secondInt;
      }
    };
  };
}

module.exports = makeRobotAccountant;
