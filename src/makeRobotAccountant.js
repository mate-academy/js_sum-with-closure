'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (a) => {
    return (b) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      const sumOfNums = a + b;

      return sumOfNums;
    };
  };
}

module.exports = makeRobotAccountant;
