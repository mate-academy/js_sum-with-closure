'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sum = 0;
  let count = 0;
  const errorMessage = 'Bzzz... Error!';

  return function getSum(x) {
    return (y) => {
      count++;
      sum = x + y;

      if (count > 3 && count % 2 === 0) {
        return errorMessage;
      };

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
