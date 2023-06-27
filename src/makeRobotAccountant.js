'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function sum(a) {
    count++;

    return (b) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return a + b;
      }
    };
  }

  return sum;
}

module.exports = makeRobotAccountant;
