'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  function add(a) {
    return function(b) {
      counter++;

      if (counter <= 3 || counter % 2 === 1) {
        return a + b;
      }

      return `Bzzz... Error!`;
    };
  };

  return add;
}

module.exports = makeRobotAccountant;
