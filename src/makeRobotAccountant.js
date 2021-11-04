'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(first) {
    return function(second) {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return first + second;
      }
    };
  };
}

module.exports = makeRobotAccountant;
