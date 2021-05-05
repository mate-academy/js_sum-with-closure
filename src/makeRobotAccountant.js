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
      if (counter > 3 && (counter % 2) === 0) {
        return 'Bzzz... Error!';
      }

      return digit + digit2;
    };

    return insideSum;
  };

  return sum;
}

module.exports = makeRobotAccountant;
