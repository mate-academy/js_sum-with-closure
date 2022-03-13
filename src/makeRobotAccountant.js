'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const error = `Bzzz... Error!`;

  const getSum = (x) => {
    count++;

    return (y) => {
      if (count > 3 && count % 2 === 0) {
        return error;
      }

      return x + y;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
