'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = (a) => {
    counter++;

    return (b) => {
      if (counter < 4 || counter % 2 === 1) {
        return a + b;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
