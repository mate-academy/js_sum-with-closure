'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let called = 0;
  const errorMessage = 'Bzzz... Error!';

  const getSum = (x) => {
    called++;

    return (y) => {
      if (called > 3 && called % 2 === 0) {
        return errorMessage;
      }

      return x + y;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
