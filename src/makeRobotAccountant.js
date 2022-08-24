'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(multiplierOne) {
    count++;

    return function(multiplierTwo) {
      if (count > 3 && count % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return multiplierOne + multiplierTwo;
    };
  };
}

module.exports = makeRobotAccountant;
