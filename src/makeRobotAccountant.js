'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let numberOfCalls = 0;

  const getSum = (x) => {
    numberOfCalls++;

    return function(y) {
      if (numberOfCalls > 3 && numberOfCalls % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return x + y;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
