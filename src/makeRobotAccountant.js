'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 1;

  return function count(n) {
    counter += 1;

    return function sum(m) {
      if (counter > 3 && counter % 2 === 1) {
        return 'Bzzz... Error!';
      }

      return n + m;
    };
  };
}

module.exports = makeRobotAccountant;
