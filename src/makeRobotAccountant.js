'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstParam) => {
    return (secondParam) => {
      count++;

      const sum = firstParam + secondParam;

      if (count > 3 && count % 2 === 0) {
        return ('Bzzz... Error!');
      }

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
