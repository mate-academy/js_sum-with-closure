'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = (number) => {
    counter++;

    if (counter >= 3 && counter % 2 === 0) {
      return (x) => 'Bzzz... Error!';
    }

    return (x) => x + number;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
