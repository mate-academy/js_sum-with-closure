'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  const sum = (a) => {
    count++;

    return (b) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
