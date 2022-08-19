'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  // write code here
  const add = (a) => {
    count++;

    return function(b) {
      if (count >= 4 && count % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return a + b;
    };
  };

  return add;
};

module.exports = makeRobotAccountant;
