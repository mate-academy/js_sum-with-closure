'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(y) {
    count++;

    function add(x) {
      return x + y;
    }

    if (count <= 3) {
      return add;
    }

    if (count >= 4 && count % 2 === 0) {
      return () => `Bzzz... Error!`;
    }

    return add;
  };
}

module.exports = makeRobotAccountant;
