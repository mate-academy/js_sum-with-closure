'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const secondAccouning = (firstArg) => {
    count++;

    const sum = (secondArg) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstArg + secondArg;
    };

    return sum;
  };

  return secondAccouning;
}

module.exports = makeRobotAccountant;
