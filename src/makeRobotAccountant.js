'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const maxCalls = 3;

  return function getSum(a) {
    return (b) => {
      count++;

      if (count > maxCalls && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
