'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return (a) => {
    count++;

    if (count < 3 || count % 2 !== 0) {
      return (b) => a + b;
    } else {
      return () => 'Bzzz... Error!';
    }
  };
}

module.exports = makeRobotAccountant;
