'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant(x, y) {
  // write code here
  let count = 0;

  const sumUp = (a) => {
    return function(b) {
      const sum = a + b;

      count++;

      return (count > 3 && count % 2 === 0)
        ? `Bzzz... Error!`
        : sum;
    };
  };

  return sumUp;
}

module.exports = makeRobotAccountant;
