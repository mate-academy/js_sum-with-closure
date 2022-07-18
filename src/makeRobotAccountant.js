'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let numberOfCalls = 0;
  const getSum = (x) => {
    return (y) => {
      numberOfCalls++;

      if (numberOfCalls > 3 && numberOfCalls % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
