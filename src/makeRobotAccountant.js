'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const sum = (a) => {
    return (b) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
