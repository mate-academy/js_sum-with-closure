'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  const getSum = (x) => (y) => {
    const error = 'Bzzz... Error!';

    counter++;

    if (counter > 3 && counter % 2 === 0) {
      return error;
    }

    return x + y;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
