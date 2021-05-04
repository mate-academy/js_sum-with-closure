'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const sum = (digit) => {
    counter++;

    const insideSum = (digit2) => {
      if (counter < 3) {
        return digit + digit2;
      } else if (counter % 2 === 1) {
        return digit + digit2;
      } else if (counter % 2 === 0) {
        return 'Bzzz... Error!';
      }
    };

    return insideSum;
  };

  return sum;
}

module.exports = makeRobotAccountant;
