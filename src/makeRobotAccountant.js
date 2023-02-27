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
      if (count <= 3 || count % 2 !== 0) {
        return x + y;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
