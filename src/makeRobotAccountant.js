'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 1;

  const counter = firstParam => {
    count += 1;

    const sum = secondParam => {
      if (count > 3 && count % 2 === 1) {
        return 'Bzzz... Error!';
      };

      return firstParam + secondParam;
    };

    return sum;
  };

  return counter;
}

module.exports = makeRobotAccountant;
