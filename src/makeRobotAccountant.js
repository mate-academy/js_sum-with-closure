'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let sum = 0;
  let count = 0;
  const errorMessage = 'Bzzz... Error!';

  return (x) => {
    return (y) => {
      count++;

      if (count < 4 || count % 2 !== 0) {
        sum = x + y;

        return sum;
      }

      return errorMessage;
    };
  };
}

module.exports = makeRobotAccountant;
