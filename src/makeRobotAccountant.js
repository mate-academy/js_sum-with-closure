'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;
  const errorMessage = 'Bzzz... Error!';

  const getSum = (x) => {
    return (y) => {
      if (count % 2 !== 0 || count < 3) {
        count++;

        return x + y;
      } else {
        count++;

        return errorMessage;
      }
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
