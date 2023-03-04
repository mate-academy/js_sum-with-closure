'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (a) => {
    return function(b) {
      count++;

      if (count <= 3) {
        return a + b;
      }

      if (count > 3) {
        if (count % 2 !== 0) {
          return a + b;
        } else {
          return 'Bzzz... Error!';
        }
      }
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
