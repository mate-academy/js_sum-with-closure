'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(x) {
    count++;

    return function(y) {
      if (count <= 3) {
        return x + y;
      } else if (count % 2 === 0 && count > 3) {
        return 'Bzzz... Error!';
      } else {
        return x + y;
      }
    };
  };
}

module.exports = makeRobotAccountant;
