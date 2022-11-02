'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;
  const getSum = (a) => {

    countCalls++;

    const isEven = countCalls % 2 === 0;

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
