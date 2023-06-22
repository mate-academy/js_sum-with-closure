'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function getSum(a) {
    count++;

    if (count >= 4 && count % 2 === 0) {
      return () => 'Bzzz... Error!';
    }

    return (b) => a + b;
  };
}

module.exports = makeRobotAccountant;
