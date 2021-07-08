'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const errorMessage = 'Bzzz... Error!';

  const getSum = (x) => {
    count++;

    return (y) => {
      if (count > 3 && count % 2 === 0) {
        return errorMessage;
      }

      return x + y;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
