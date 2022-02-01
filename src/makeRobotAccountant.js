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

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  }

  return add;
}

module.exports = makeRobotAccountant;
