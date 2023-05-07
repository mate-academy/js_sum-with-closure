'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 1;

  return (x) => {
    return function(y) {
      const result
        = counter <= 3 || counter % 2 !== 0
          ? x + y
          : `Bzzz... Error!`;

      counter++;

      return result;
    };
  };
}

module.exports = makeRobotAccountant;
