'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function add(a) {
    count++;

    return function(b) {
      if (count > 3 && count % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return a + b;
    };
  };

  return add;
}

module.exports = makeRobotAccountant;
