'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const callFunction = function(y) {
    count++;

    return function(x) {
      if (count > 3 && count % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return x + y;
    };
  };

  return callFunction;
};

module.exports = makeRobotAccountant;
