'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant(a) {
  let count = 0;

  return function(b) {
    return function(c) {
      count++;

      if (count % 2 === 0 && count > 3) {
        return 'Bzzz... Error!';
      } else {
        return b + c;
      }
    };
  };
}

module.exports = makeRobotAccountant;
