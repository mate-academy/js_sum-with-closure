'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function getSum(x) {
    return function(y) {
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return x + y;
    };
  };
};

module.exports = makeRobotAccountant;
