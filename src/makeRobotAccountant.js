'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const result = (a) => {
    count++;

    const sum = (b) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };

    return sum;
  };

  return result;
}
module.exports = makeRobotAccountant;
