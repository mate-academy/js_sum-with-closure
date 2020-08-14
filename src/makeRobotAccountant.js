'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let start = 0;

  return (a) => (b) => {
    start++;

    if (start <= 3 || start % 2 !== 0) {
      return a + b;
    } else {
      return 'Bzzz... Error!';
    }
  };
}

module.exports = makeRobotAccountant;
