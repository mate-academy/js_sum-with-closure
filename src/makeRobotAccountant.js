'use strict';

/**
 *
 * @return {function}
 *
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = (x) => {
    counter++;

    return (y) => {
      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
