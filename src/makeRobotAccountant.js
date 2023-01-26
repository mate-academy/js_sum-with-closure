'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(x) {
    count++;

    if (count > 3 && count % 2 === 0) {
      return function() {
        return 'Bzzz... Error!';
      };
    }

    return function(y) {
      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
