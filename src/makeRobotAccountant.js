'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
//   // write code here
  let count = 0;

  return function(a) {
    return function(b) {
      count++;

      return (count % 2 === 0 && count > 3)
        ? 'Bzzz... Error!'
        : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
