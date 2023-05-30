'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const errorMessage = 'Bzzz... Error!';

  const sum = (a) => {
    return (b) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return errorMessage;
      }

      return a + b;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
