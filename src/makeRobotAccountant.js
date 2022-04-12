'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 3;

  const getSum = (x) => {
    counter--;

    return (y) => {
      const sum = x + y;

      if (counter >= 0) {
        return sum;
      } else {
        counter = 1;

        return 'Bzzz... Error!';
      }
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
