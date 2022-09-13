'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  const sum = (a) => {
    return function(b) {
      if (count > 3 && count % 2 === 0) {
        count++;

        return 'Bzzz... Error!';
      }

      count++;

      return a + b;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
