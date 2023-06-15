'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (a) => {
    let sum = 0;

    return (b) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      sum = a + b;

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
