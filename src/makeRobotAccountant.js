'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  function first(a) {
    count++;

    function second(b) {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    }

    return second;
  }

  return first;
}

module.exports = makeRobotAccountant;
