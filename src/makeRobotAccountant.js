'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = (a) => {
    return (b) => {
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
