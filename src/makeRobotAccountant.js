'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getCount = (a) => {
    count++;

    return function(b) {
      if (count > 3 && count % 2 === 0) {
        return `Bzzz... Error!`;
      } else {
        return a + b;
      }
    };
  };

  return getCount;
}

module.exports = makeRobotAccountant;
