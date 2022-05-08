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
        return y + x;
      } else if (count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return y + x;
      }
    };
  };
}

module.exports = makeRobotAccountant;
