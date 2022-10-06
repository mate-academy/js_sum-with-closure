'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const robot = function(firstValue) {
    count++;

    const sum = function(secondValue) {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstValue + secondValue;
    };

    return sum;
  };

  return robot;
}

module.exports = makeRobotAccountant;
