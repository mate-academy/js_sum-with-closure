'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(x) {
    count++;

    if (count <= 3) {
      return function(y) {
        return x + y;
      };
    } else if (count % 2 === 0) {
      return function(y) {
        return 'Bzzz... Error!';
      };
    } else {
      return function(y) {
        return x + y;
      };
    }
  };
}

module.exports = makeRobotAccountant;
