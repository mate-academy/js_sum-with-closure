'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(x) {
    return function(b) {
      count++;

      if (count > 2 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + b;
    };
  };
}

module.exports = makeRobotAccountant;
