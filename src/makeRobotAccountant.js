'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return function sum(n) {
    count++;

    return (n2) => (count < 4 || count % 2)
      ? n + n2
      : 'Bzzz... Error!';
  };
}

module.exports = makeRobotAccountant;
