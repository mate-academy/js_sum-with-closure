'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;
  const getSum = (a) => {
    const isEven = countCalls % 2 === 1;

    countCalls++;

    return (b) => {
      if (countCalls > 3 && isEven) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
