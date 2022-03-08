'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  const errorMessage = 'Bzzz... Error!';

  const getSum = (x) => {
    counter++;

    return (y) => {
      if (counter > 3 && counter % 2 === 0) {
        return errorMessage;
      }

      return x + y;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
