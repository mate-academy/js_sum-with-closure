'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = (number) => {
    counter++;

    if (counter < 3) {
      return (x) => x + number;
    } else {
      if (counter % 2 === 0) {
        return (x) => 'Bzzz... Error!';
      } else {
        return (x) => x + number;
      }
    }
  };

  return getSum;
}

module.exports = makeRobotAccountant;
