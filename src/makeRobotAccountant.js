'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function add(x) {
    return function(y) {
      count++;

      if (count > 3) {
        if (count % 2 === 0) {
          return 'Bzzz... Error!';
        } else {
          return x + y;
        }
      } else {
        return x + y;
      }
    };
  }

  return add;
}

module.exports = makeRobotAccountant;
